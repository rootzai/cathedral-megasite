const fs = require('fs');
const https = require('https');

// For Seton Hall: EIN 221500645
const url = 'https://projects.propublica.org/nonprofits/api/v2/organizations/221500645.json';

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const json = JSON.parse(data);
        const filings = json.filings_with_data.filter(f => f.tax_prd_yr === 2018 || f.tax_prd_yr === 2019);
        console.log("Found filings for 2018/2019:", filings.map(f => f.tax_prd_yr + ": " + f.url));
        
        filings.forEach(f => {
            https.get(f.url, (xmlRes) => {
                let xml = '';
                xmlRes.on('data', chunk => xml += chunk);
                xmlRes.on('end', () => {
                    fs.writeFileSync(`seton_hall_${f.tax_prd_yr}.xml`, xml);
                    console.log(`Saved seton_hall_${f.tax_prd_yr}.xml`);
                });
            });
        });
    });
});
