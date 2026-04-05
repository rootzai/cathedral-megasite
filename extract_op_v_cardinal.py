import docx
import os

def read_docx(file_path):
    try:
        doc = docx.Document(file_path)
        fullText = []
        for para in doc.paragraphs:
            fullText.append(para.text)
        return '\n'.join(fullText)
    except Exception as e:
        return f"Error reading {file_path}: {e}"

docs_dir = r'c:\Projects\Cathedral_Megasite\docs'
target_file = 'Op v Cardinal Tobin 2.docx'
file_path = os.path.join(docs_dir, target_file)

if os.path.exists(file_path):
    content = read_docx(file_path)
    with open('op_v_cardinal_extracted.txt', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Extraction successful: op_v_cardinal_extracted.txt")
else:
    print(f"File {target_file} not found.")
