document.addEventListener('DOMContentLoaded', () => {
    // 1. Tab Switching Logic
    const tabs = document.querySelectorAll('.weather-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active to clicked
            tab.classList.add('active');
            const targetId = 'tab-' + tab.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 2. Mock Data Rendering: Crop Intelligence
    const cropData = {
        wheat: [
            { icon: 'fa-temperature-half', title: 'Temperature Status', desc: 'Current 28°C is ideal for tillering stage. Keep soil moist but not waterlogged.', type: 'info' },
            { icon: 'fa-cloud-showers-heavy', title: 'Rainfall Impact', desc: 'Heavy rain expected on Thursday. Delay any planned urea top-dressing.', type: 'unfavorable' },
            { icon: 'fa-bug', title: 'Pest Risk', desc: 'Moderate humidity increases risk of brown rust. Monitor lower leaves.', type: 'moderate' }
        ],
        rice: [
            { icon: 'fa-droplet', title: 'Water Level', desc: 'Upcoming dry spell over weekend. Ensure field maintains 2-inch standing water.', type: 'moderate' },
            { icon: 'fa-temperature-arrow-up', title: 'Temperature', desc: 'Good heat accumulation for panicle initiation.', type: 'info' },
            { icon: 'fa-wind', title: 'Wind Alert', desc: 'Northerly winds at 12km/h are safe; no lodging risk currently.', type: 'info' }
        ],
        sugarcane: [
            { icon: 'fa-sun', title: 'Sunlight', desc: 'Excellent solar radiation for sugar synthesis.', type: 'info' },
            { icon: 'fa-droplet-slash', title: 'Irrigation', desc: 'Rain expected. Pause manual irrigation schedules for the next 72 hours.', type: 'info' },
            { icon: 'fa-bug', title: 'Disease Risk', desc: 'High risk of red rot due to upcoming humidity spike. Pre-emptive spray advised.', type: 'unfavorable' }
        ]
    };

    const intGrid = document.getElementById('cropIntelligenceContent');
    const cropSelect = document.getElementById('cropSelect');

    const renderCropIntelligence = (cropKey) => {
        intGrid.innerHTML = '';
        const data = cropData[cropKey] || cropData['wheat'];
        data.forEach(item => {
            let typeClass = item.type === 'unfavorable' ? 'unfavorable' : item.type === 'moderate' ? 'moderate' : '';
            intGrid.innerHTML += `
                <div class="intelligence-card ${typeClass}">
                    <div class="int-header">
                        <div class="int-icon"><i class="fa-solid ${item.icon}"></i></div>
                        <div class="int-title">${item.title}</div>
                    </div>
                    <div class="int-desc">${item.desc}</div>
                </div>
            `;
        });
    };

    cropSelect.addEventListener('change', (e) => {
        renderCropIntelligence(e.target.value);
    });

    // Initial render
    renderCropIntelligence('wheat');

    // 3. Mock Data Rendering: Knowledge Base
    const kbData = [
        { img: 'https://images.unsplash.com/photo-1592982537447-6f2cf336152a?auto=format&fit=crop&q=80&w=400', tag: 'Basics', title: 'Reading Humidity Levels', excerpt: 'Learn how high humidity affects pest cycles and when to spray.' },
        { img: 'https://images.unsplash.com/photo-1586771107445-d3af296bbcc2?auto=format&fit=crop&q=80&w=400', tag: 'Seasonal', title: 'Monsoon Preparation 101', excerpt: 'Essential drainage strategies to prevent root rot in heavy rains.' },
        { img: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400', tag: 'Advanced', title: 'Microclimate Anomalies', excerpt: 'Why your field might be 3 degrees hotter than the nearest town.' },
        { img: 'https://images.unsplash.com/photo-1530533718754-0010d3e527d2?auto=format&fit=crop&q=80&w=400', tag: 'Tradition', title: 'Folk Signs of Rain', excerpt: 'Comparing traditional cloud observation methods with satellite data.' }
    ];

    const kbGrid = document.getElementById('kbContentGrid');
    kbData.forEach(item => {
        kbGrid.innerHTML += `
            <div class="kb-card">
                <div class="kb-img" style="background-image: url('${item.img}')"></div>
                <div class="kb-content">
                    <span class="kb-tag">${item.tag}</span>
                    <h3 class="kb-title">${item.title}</h3>
                    <p class="kb-excerpt">${item.excerpt}</p>
                </div>
            </div>
        `;
    });

    // 4. Mock Data Rendering: Alerts
    const alertsData = [
        { type: 'critical', icon: 'fa-cloud-bolt', title: 'Heavy Rainfall Warning', desc: 'Expect 45mm of rain in the next 48 hours. Secure harvested crops and clear drainage channels immediately.', time: '2 hours ago' },
        { type: 'warning', icon: 'fa-temperature-low', title: 'Soil Temperature Drop', desc: 'Night temperatures dropping below 15°C. Delayed germination expected for newly sown seeds.', time: '5 hours ago' },
        { type: 'info', icon: 'fa-droplet', title: 'Optimal Irrigation Window', desc: 'No rain forecast for the next 3 days. Soil moisture has dropped to 40%. Scheduled irrigation is advised.', time: 'Yesterday' }
    ];

    const alertsContainer = document.getElementById('alertsContentList');
    alertsData.forEach(alert => {
        alertsContainer.innerHTML += `
            <div class="alert-item ${alert.type}">
                <div class="alert-icon"><i class="fa-solid ${alert.icon}"></i></div>
                <div class="alert-content">
                    <h3>${alert.title}</h3>
                    <p>${alert.desc}</p>
                    <span class="alert-time">${alert.time}</span>
                </div>
            </div>
        `;
    });

    // 5. Language Toggle Mock
    let isHindi = false;
    const langBtn = document.getElementById('langToggleBtn');
    
    // Very basic localized dictionary snippet for demo
    const localDict = {
        en: {
            weather_title: "Weather & Agricultural Intelligence",
            weather_subtitle: "Localized forecasts and crucial crop insights to protect your harvest.",
            tab_forecast: "Real-Time Forecast",
            tab_crops: "Crop Predictions",
            tab_knowledge: "Knowledge Base",
            tab_alerts: "Soil & Crop Alerts"
        },
        hi: {
            weather_title: "मौसम और कृषि बुद्धिमत्ता",
            weather_subtitle: "आपकी फसल की सुरक्षा के लिए स्थानीय मौसम পূর্বাভাস और महत्वपूर्ण जानकारी।",
            tab_forecast: "वास्तविक समय पूर्वानुमान",
            tab_crops: "फसल भविष्यवाणियां",
            tab_knowledge: "ज्ञानकोष",
            tab_alerts: "मिट्टी और फसल अलर्ट"
        }
    };

    langBtn.addEventListener('click', () => {
        isHindi = !isHindi;
        const targetLang = isHindi ? 'hi' : 'en';
        
        // Update basic strings
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (localDict[targetLang][key]) {
                el.innerText = localDict[targetLang][key];
            }
        });
        
        document.getElementById('langText').innerText = isHindi ? 'English / हिंदी' : 'हिंदी / English';
    });

    // 6. Location Mock
    document.getElementById('locationBtn').addEventListener('click', () => {
        const textSpan = document.getElementById('locationText');
        if (textSpan.innerText === 'Auto-Detect Location') {
            textSpan.innerText = 'Detecting...';
            setTimeout(() => {
                textSpan.innerText = 'Ludhiana, PB';
                document.getElementById('currentLocDisplay').innerText = 'Ludhiana, Punjab';
            }, 1000);
        } else {
            textSpan.innerText = 'Auto-Detect Location';
        }
    });
});
