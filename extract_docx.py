import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r"C:\Users\ES.WIN10PRO2-DEMO\Downloads\Fletch reporting 4.docx"
output_path = "fletch_content.txt"

def extract_text_from_docx(path):
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    tree = ET.fromstring(xml_content)
    
    # Namespaces
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    paragraphs = []
    for paragraph in tree.findall('.//w:p', ns):
        texts = [node.text for node in paragraph.findall('.//w:t', ns) if node.text]
        if texts:
            paragraphs.append("".join(texts))
            
    return "\n\n".join(paragraphs)

try:
    content = extract_text_from_docx(docx_path)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Extraction successful: {output_path}")
except Exception as e:
    print(f"Error: {e}")
