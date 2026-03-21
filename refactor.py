import os
import re

replacements = {
    # Backgrounds: Dark to Light
    r'\bbg-zinc-950\b': 'bg-zinc-50',
    r'\bbg-zinc-900\b': 'bg-zinc-100',
    r'\bbg-zinc-800\b': 'bg-zinc-200',
    r'\bbg-zinc-950/50\b': 'bg-zinc-50/50',
    r'\bbg-zinc-900/50\b': 'bg-zinc-100/50',
    r'\bbg-black\b': 'bg-white',

    # Text Colors: Light to Dark (since backgrounds are now light)
    r'\btext-white\b': 'text-zinc-900',
    r'\btext-zinc-100\b': 'text-zinc-900',
    r'\btext-zinc-200\b': 'text-zinc-800',
    r'\btext-zinc-300\b': 'text-zinc-800',
    r'\btext-zinc-400\b': 'text-zinc-600',
    r'\btext-zinc-500\b': 'text-zinc-600',

    # Border Colors: Dark to Light
    r'\bborder-zinc-900\b': 'border-zinc-300',
    r'\bborder-zinc-800\b': 'border-zinc-300',
    r'\bborder-zinc-700\b': 'border-zinc-300',

    # Aesthetic Overrides: Remove Red/Blood (Sensationalist Thriller -> Institutional)
    r'\btext-blood\b': 'text-zinc-800',
    r'\bbg-blood\b': 'bg-zinc-800',
    r'\bborder-blood\b': 'border-zinc-400',
    r'\btext-red-500\b': 'text-zinc-700',
    r'\btext-red-600\b': 'text-zinc-800',
    r'\bborder-red-500\b': 'border-zinc-300',
    r'\bborder-red-600\b': 'border-zinc-300',
    r'\btext-crimson\b': 'text-zinc-800',
    r'\bbg-red-950\b': 'bg-zinc-100',
    r'\bbg-red-900/20\b': 'bg-zinc-200/50',

    # The gradients
    r'\bfrom-transparent via-blood to-transparent\b': 'from-transparent via-zinc-300 to-transparent'
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    for pattern, replacement in replacements.items():
        content = re.sub(pattern, replacement, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

def main():
    root_dir = os.path.join(os.path.dirname(__file__), 'client', 'src')
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.tsx') or filename.endswith('.ts'):
                filepath = os.path.join(dirpath, filename)
                process_file(filepath)

if __name__ == "__main__":
    main()
