# AgroTrack Documentation
                
## Profile Page Specifications

**Page: Profile**
**Route: /profile**

The Profile page serves as the farmer's personal dashboard on AgroTrack. It gives users a centralized place to manage their identity, farm data, connected devices, and account preferences.

---

**1. Header / Hero Section**

Displays the farmer's avatar (initials or uploaded photo), full name, email address, and phone number. A colored badge shows the current plan (Free / Pro / Premium). Background uses AgroTrack's dark green theme to match the overall branding.

---

**2. Personal Info Card**

Shows basic account details in a clean key-value layout:
- Full Name
- Location (City, State)
- Language Preference
- Member Since (joining date)

---

**3. Farm Overview Card**

A 2x2 grid of stat boxes displaying:
- Total number of fields
- Total farm area in acres
- Number of active crops
- Overall crop success rate (%)

Data is fetched dynamically from the user's account.

---

**4. Connected Devices Card**

Lists all IoT sensors and hardware linked to the farmer's account (e.g., Soil Sensor, AQI Monitor, DHT11). Each device shows:
- Device name and assigned field
- Online / Offline status indicated by a green or grey dot

---

**5. Subscription Card**

Shows the user's current plan name, active status badge, renewal date, and a progress bar indicating how much of the billing cycle has been used.

---

**6. Account Settings Card**

A grid of quick-settings tiles showing current status of:
- Push / Email Notifications
- Two-Factor Authentication (2FA)
- Pest Alert Preferences (Email, SMS, or Both)
- Data Export option (Download as CSV)

---

**7. Logout Button**

A full-width button at the bottom of the page, styled in a soft red to clearly indicate a destructive/exit action.

---

**Color Scheme (consistent with AgroTrack branding):**
- Dark green: `#1a3a2a` — navbar, hero background
- Accent green: `#4caf7d` — buttons, badges, online indicators
- Page background: `#f4f6f0` — light greenish white
- Card background: `#ffffff` with subtle green-tinted borders
