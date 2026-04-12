import requests
import xml.etree.ElementTree as ET
import re

url = "https://s3.amazonaws.com/irs-form-990/202031209349300938_public.xml"
r = requests.get(url)
xml_str = re.sub(' xmlns="[^"]+"', '', r.text, count=1)

root = ET.fromstring(xml_str)
people = [(p.findtext('.//PersonNm'), p.findtext('.//TitleTxt')) for p in root.findall('.//Form990PartVIISectionAGrp')]

for nm, title in people:
    print(f"{nm} - {title}")
