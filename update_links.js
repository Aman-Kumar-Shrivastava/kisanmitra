const fs = require('fs');

const files = [
    'index.html',
    'pricing.html',
    'profile.html',
    'market.html',
    'login.html',
    'pest_alert.html',
    'crop_report.html',
    'community.html'
];

files.forEach(f => {
    let p = 'c:/Users/vmann/OneDrive/Desktop/kisnamitra/kisanmitra-github.io/' + f;
    if (fs.existsSync(p)) {
        let c = fs.readFileSync(p, 'utf8');
        c = c.replace(/href=\"[^\"]*#weather\"/g, 'href="weather.html"');
        fs.writeFileSync(p, c);
        console.log('Updated ' + f);
    }
});
