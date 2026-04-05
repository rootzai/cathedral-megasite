import docx

def extract_text(path):
    doc = docx.Document(path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return '\n'.join(full_text)

try:
    content = extract_text(r"c:\Projects\Cathedral_Megasite\docs\Perry Law Forensic.docx")
    print(content)
except Exception as e:
    print(f"Error: {e}")
