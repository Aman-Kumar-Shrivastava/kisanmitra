const fs = require('fs');

const files = [
    'index.html',
    'pricing.html',
    'profile.html',
    'market.html',
    'login.html',
    'pest_alert.html',
    'crop_report.html',
    'community.html',
    'weather.html',
    'my_fields.html',
    'crop_tracker.html'
];

files.forEach(f => {
    let p = 'c:/Users/vmann/OneDrive/Desktop/kisnamitra/kisanmitra-github.io/' + f;
    if (fs.existsSync(p)) {
        let c = fs.readFileSync(p, 'utf8');
        let initialLen = c.length;
        
        c = c.replace(/href=\"[^\"]*#fields\"/g, 'href="my_fields.html"');
        c = c.replace(/href=\"[^\"]*#tracker\"/g, 'href="crop_tracker.html"');
        
        if (c.length !== initialLen || c !== fs.readFileSync(p, 'utf8')) {
            fs.writeFileSync(p, c);
            console.log('Updated ' + f);
        }
    }
});
