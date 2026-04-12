import requests
import json
from bs4 import BeautifulSoup

def get_wayback_page(url, timestamp):
    print(f"Fetching {url} for {timestamp}...")
    api_url = f"http://archive.org/wayback/available?url={url}&timestamp={timestamp}"
    r = requests.get(api_url).json()
    if r.get('archived_snapshots') and r['archived_snapshots'].get('closest'):
        snap_url = r['archived_snapshots']['closest']['url']
        print(f"Found snapshot: {snap_url}")
        page = requests.get(snap_url)
        soup = BeautifulSoup(page.text, 'html.parser')
        
        # usually boards are in ul/li or tables
        print("--- EXTRACTED TEXT ---")
        for p in soup.find_all(['p', 'li', 'td', 'div']): # get some text
            text = p.get_text(strip=True)
            if len(text) > 5 and len(text) < 100:
                print(text)
    else:
        print("No snapshot found.")

get_wayback_page("https://www.shu.edu/administration/board-of-regents.cfm", "20190827")
get_wayback_page("https://www.shu.edu/administration/board-of-trustees.cfm", "20190827")
