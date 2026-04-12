import fitz

url = "https://scholarship.shu.edu/cgi/viewcontent.cgi?article=1038&context=undergraduate_catalogues"
import requests
pdf_data = requests.get(url).content

doc = fitz.open(stream=pdf_data, filetype="pdf")
with open("catalog_tail.txt", "w", encoding="utf-8") as f:
    for i in range(len(doc)-30, len(doc)):
        text = doc[i].get_text("text")
        f.write(f"\n--- PAGE {i} ---\n")
        f.write(text)

with open("catalog_head.txt", "w", encoding="utf-8") as f:
    for i in range(0, 30):
        text = doc[i].get_text("text")
        f.write(f"\n--- PAGE {i} ---\n")
        f.write(text)
