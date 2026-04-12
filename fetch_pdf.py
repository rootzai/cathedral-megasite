import requests
from bs4 import BeautifulSoup
import fitz # pymupdf
import io
import re

url = "https://scholarship.shu.edu/undergraduate_catalogues/38/"
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')

pdf_link = ""
for a in soup.find_all('a'):
    href = a.get('href')
    if href and "viewcontent.cgi" in href:
        pdf_link = href
        break

print("Downloading PDF:", pdf_link)
pdf_data = requests.get(pdf_link).content

doc = fitz.open(stream=pdf_data, filetype="pdf")
print("PDF Pages:", len(doc))

found = False
for i in range(len(doc)-30, len(doc)):
    text = doc[i].get_text("text")
    if "Board of Regents" in text or "Board of Trustees" in text:
        print(f"--- PAGE {i} ---")
        print(text)
        found = True

if not found:
    for i in range(0, 30):
        text = doc[i].get_text("text")
        if "Board of Regents" in text or "Board of Trustees" in text:
            print(f"--- PAGE {i} ---")
            print(text)
            found = True
