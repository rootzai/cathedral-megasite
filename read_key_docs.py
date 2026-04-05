import docx
import os

def read_docx(file_path):
    doc = docx.Document(file_path)
    fullText = []
    for para in doc.paragraphs:
        fullText.append(para.text)
    return '\n'.join(fullText)

docs_dir = r'c:\Projects\Cathedral_Megasite\docs'
target_files = [
    'Op v Cardinal Tobin 2.docx',
    'Cat design Sodom Hall 1 dossier.docx',
    'Fletch reporting 4.docx',
    'Transcript_1_Mar18_2025_Part1.docx'
]

for file_name in target_files:
    file_path = os.path.join(docs_dir, file_name)
    if os.path.exists(file_path):
        print(f"--- CONTENT OF {file_name} ---")
        try:
            print(read_docx(file_path))
        except Exception as e:
            print(f"Error reading {file_name}: {e}")
        print("\n" + "="*50 + "\n")
    else:
        print(f"File {file_name} not found.")
