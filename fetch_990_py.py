import requests
import json
import xml.etree.ElementTree as ET

resp = requests.get("https://projects.propublica.org/nonprofits/api/v2/organizations/221500645.json")
data = resp.json()

for f in data.get('filings_with_data', []):
    if f.get('tax_prd_yr') == 2018 or f.get('tax_prd_yr') == 2019:
        print(f"Year {f.get('tax_prd_yr')}")
        xml_url = f.get('url') # wait, the API v2 gives pdf url. Let's try pdf_url or xml_url
        xml_url = f.get('xml_url')
        if not xml_url:
            xml_url = f.get('url') # some versions the url IS the xml URL? Oh wait, url is the web page.
            # actually we can get object_id
            obj_id = f.get('object_id')
            if obj_id:
                xml_url = f"https://s3.amazonaws.com/irs-form-990/{obj_id}_public.xml"
        
        print("XML URL:", xml_url)
        if xml_url:
            try:
                xresp = requests.get(xml_url)
                if xresp.status_code == 200:
                    root = ET.fromstring(xresp.content)
                    ns = {'irs': 'http://www.irs.gov/efile'}
                    print(f"--- board members for {f.get('tax_prd_yr')} ---")
                    # IRS uses namespace, sometimes default namespace.
                    # let's just strip namespaces for easy parsing
                    import re
                    xml_str = re.sub(' xmlns="[^"]+"', '', xresp.content.decode('utf-8'), count=1)
                    root = ET.fromstring(xml_str)
                    
                    for person in root.findall(".//Form990PartVIISectionAGrp"):
                        name = person.findtext(".//PersonNm")
                        title = person.findtext(".//TitleTxt")
                        print(f"{name} - {title}")
            except Exception as e:
                print(e)
