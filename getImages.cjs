const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchImage(query, filename) {
    return new Promise((resolve) => {
        const url = "https://duckduckgo.com/html/?q=" + encodeURIComponent(query);
        console.log(`Searching for ${query}`);

        https.get(url, {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const regex = /<img[^>]+src="([^"]+)"/g;
                let match;
                const urls = [];
                while ((match = regex.exec(data)) !== null) {
                    urls.push(match[1]);
                }

                let found = false;
                for (let imgUrl of urls) {
                    if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
                    if (imgUrl.includes('duckduckgo') || imgUrl.includes('favicon')) continue;

                    console.log(`Trying ${imgUrl}`);
                    https.get(imgUrl, (imgRes) => {
                        if (imgRes.statusCode === 200) {
                            const file = fs.createWriteStream(filename);
                            imgRes.pipe(file);
                            file.on('finish', () => {
                                file.close();
                                console.log(`Downloaded ${filename}`);
                            });
                        }
                    });
                    found = true;
                    break; // just try first good one
                }
                resolve(found);
            });
        }).on('error', (e) => {
            console.log(`Failed for ${query}: ${e.message}`);
            resolve(false);
        });
    });
}

const dir = path.join(__dirname, 'client', 'public', 'assets', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

fetchImage("Bishop Elias R. Lorenzo auxiliary newark photo jpg portrait", path.join(dir, "lorenzo_portrait.jpg"));
fetchImage("Father Kenneth L. Martin priest newark photo portrait", path.join(dir, "martin_portrait.jpg"));
