import fitz
import requests
import re

url = "https://projects.propublica.org/nonprofits/download-filing?path=08_2020_prefixes_20-23%2F221500645_201906_990_2020081917245294.pdf"
print("Downloading...")
data = requests.get(url).content
with open("990.pdf", "wb") as f:
    f.write(data)

doc = fitz.open("990.pdf")
print("Extracting...")
with open("990.txt", "w", encoding='utf-8') as f:
    for page in doc:
        f.write(page.get_text())
