import fitz
import requests
import io

url = "https://projects.propublica.org/nonprofits/download-filing?path=08_2020_prefixes_20-23%2F221500645_201906_990_2020081917245294.pdf"
print("Downloading 2019 IRS 990...")
pdf_data = requests.get(url).content

doc = fitz.open(stream=pdf_data, filetype="pdf")
print("Extracting Regents & Trustees...")
for page in doc:
    text = page.get_text("text")
    if "Part VII" in text or "List of Officers" in text or "TRUSTEE" in text or "REGENT" in text:
        lines = text.split("\n")
        for line in lines:
            if "REGENT" in line.upper() or "TRUSTEE" in line.upper():
                print(line)
