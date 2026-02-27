import urllib.request
import re
import ssl
import urllib.parse
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch_image(query, filename):
    url = "https://duckduckgo.com/html/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    print(f"Searching for {query}")
    try:
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        # find img tags in html
        img_urls = re.findall(r'<img[^>]+src="([^"]+)"', html)
        for img_url in img_urls:
            if img_url.startswith('//'):
                img_url = 'https:' + img_url
            if 'duckduckgo' in img_url or 'favicon' in img_url:
                continue
            print(f'Downloading {filename} from {img_url}')
            try:
                urllib.request.urlretrieve(img_url, filename)
                if os.path.exists(filename) and os.path.getsize(filename) > 3000:
                    print("Success")
                    return True
            except:
                continue
    except Exception as e:
        print(f"Failed to fetch {query}: {e}")
    return False

# Ensure directory exists
os.makedirs("client/public/assets/images", exist_ok=True)

res1 = fetch_image("Bishop Elias R. Lorenzo auxiliary newark photo jpg portrait", "client/public/assets/images/lorenzo_portrait.jpg")
res2 = fetch_image("Father Kenneth L. Martin priest newark photo portrait", "client/public/assets/images/martin_portrait.jpg")

if not res1 or not res2:
    print("Some images failed or were too small.")
