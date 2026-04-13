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
]; // ai_mitra.html already has it correctly built in

files.forEach(f => {
    let p = 'c:/Users/vmann/OneDrive/Desktop/kisnamitra/kisanmitra-github.io/' + f;
    if (fs.existsSync(p)) {
        let c = fs.readFileSync(p, 'utf8');
        let initialLen = c.length;
        
        // 1. Insert in dropdown if not exists
        if (!c.includes('AI Mitra Chat')) {
            c = c.replace(
                /<li><a href=\"weather.html\">.*?Weather<\/a><\/li>\s*<\/ul>/i, 
                `<li><a href="weather.html"><i class="fa-solid fa-cloud-sun icon-left"></i> Weather</a></li>\n                        <li><a href="ai_mitra.html"><i class="fa-solid fa-comments icon-left"></i> AI Mitra Chat</a></li>\n                    </ul>`
            );
        }

        // 2. Insert in main links if not exists
        if (!c.includes('fa-robot icon-left')) {
            // Find the active or inactive Pricing link and append after it
            c = c.replace(
                /(<li><a href=\"pricing.html\"[^>]*>Pricing<\/a><\/li>)/i,
                `$1\n                <li><a href="ai_mitra.html"><i class="fa-solid fa-robot icon-left"></i> AI Mitra</a></li>`
            );
        }
        
        if (c.length !== initialLen || c !== fs.readFileSync(p, 'utf8')) {
            fs.writeFileSync(p, c);
            console.log('Updated ' + f);
        }
    }
});
