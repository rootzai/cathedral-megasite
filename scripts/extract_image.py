import re

html_path = r'c:\Projects\Cathedral_Megasite\docs\architecture\humpty_dumpty_perry_law.html'
out_path = r'c:\Projects\Cathedral_Megasite\sodomhall-project\client\src\pages\easter\humptyImage.ts'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'<img class="hero-image" src="(data:image/[^;]+;base64,[^"]+)">', content)
if match:
    base64_data = match.group(1)
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(f'export const heroImageBase64 = "{base64_data}";\n')
    print("Successfully extracted base64 image.")
else:
    print("Failed to find base64 image.")
