import requests
from bs4 import BeautifulSoup

url = 'https://www.causeiq.com/organizations/seton-hall-university,221500645/'
headers = {'User-Agent': 'Mozilla/5.0'}
page = requests.get(url, headers=headers)
soup = BeautifulSoup(page.text, 'html.parser')

print("--- extracting people ---")
for h in soup.find_all('table'):
    for tr in h.find_all('tr'):
        cells = [td.get_text(strip=True) for td in tr.find_all('td')]
        if len(cells) > 0:
            print(" | ".join(cells))
