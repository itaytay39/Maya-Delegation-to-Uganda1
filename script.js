// 🚀 אפליקציית מאיה מחוברת לגוגל שיטס - גרסה מתקדמת
console.log("🚀 מתחיל אתחול אפליקציית מאיה מחוברת לגוגל שיטס...");

// הגדרות מערכת
const SHEET_CONFIG = {
    spreadsheetId: '1zunKbBVc74mtXfXkHjMDvQSpbu9n2PSasrxQ1CsRmvg',
    participantsUrl: 'https://docs.google.com/spreadsheets/d/1zunKbBVc74mtXfXkHjMDvQSpbu9n2PSasrxQ1CsRmvg/gviz/tq?tqx=out:csv',
    triviaUrl: 'https://docs.google.com/spreadsheets/d/1zunKbBVc74mtXfXkHjMDvQSpbu9n2PSasrxQ1CsRmvg/gviz/tq?tqx=out:csv&sheet=טריוויה',
    syncInterval: 30000, // סנכרון כל 30 שניות
    appsScriptUrl: 'https://script.google.com/macros/s/AKfycbz1DrYpMY8F7awe-BuveOR_i8iwSiAHF7dRTgbh1j91beIyRy9GcIHcjhEeK3VIdlj31Q/exec' // ה-URL החדש שקיבלת
};

// משתנים גלובליים
let participants = [];
let triviaQuestions = [];
let admin = false;
const adminPassword = "1234";
let editIdx = null;
let syncTimer = null;

// מערכת הודעות מתקדמת
const ToastManager = {
    show: (message, type = 'success') => {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                if (container.contains(toast)) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
};

// מערכת מצב סנכרון
const SyncStatus = {
    element: null,
    
    init() {
        this.element = document.getElementById('sync-text');
    },
    
    update(message, isError = false) {
        if (this.element) {
            this.element.textContent = message;
            const icon = document.querySelector('.sync-icon');
            if (icon) {
                icon.style.color = isError ? 'var(--md-error)' : 'var(--md-success)';
            }
        }
    }
};

// מערכת טעינת נתונים מגוגל שיטס
const GoogleSheetsSync = {
    async loadParticipants() {
        try {
            console.log("� טוען נתונים מגוגל שיטס...");
            SyncStatus.update("טוען נתונים...");
            
            const response = await fetch(SHEET_CONFIG.participantsUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const csvText = await response.text();
            const rows = this.parseCSV(csvText);
            
            if (rows.length === 0) {
                throw new Error('אין נתונים בגיליון');
            }
            
            const headers = rows[0];
            participants = rows.slice(1)
                .filter(row => row[0] && row[0].trim()) // סינון שורות ריקות
                .map(row => {
                    const obj = {};
                    headers.forEach((h, i) => {
                        obj[h.trim()] = row[i] ? row[i].trim().replace(/"/g, '') : '';
                    });
                    
                    return {
                        firstName: obj['שם פרטי'] || '',
                        lastName: obj['שם משפחה'] || '',
                        name: (obj['שם פרטי'] || '') + ' ' + (obj['שם משפחה'] || ''),
                        city: obj['עיר'] || '',
                        lat: parseFloat(obj['Lat']) || null,
                        lon: parseFloat(obj['Lon']) || null,
                        phone: this.formatPhone(obj['מספר טלפון'] || ''),
                        whatsapp: this.formatPhone(obj['מספר ווצאפ'] || obj['מספר WhatsApp'] || '')
                    };
                })
                .filter(p => p.lat && p.lon && !isNaN(p.lat) && !isNaN(p.lon)); // סינון נתונים לא תקינים
            
            console.log(`✅ נטענו ${participants.length} משתתפים מהגיליון`);
            SyncStatus.update(`נטענו ${participants.length} משתתפים`);
            ToastManager.show(`נטענו ${participants.length} משתתפים מהגיליון`);
            
            this.updateUI();
            
        } catch (error) {
            console.error("❌ שגיאה בטעינת נתונים:", error);
            SyncStatus.update("שגיאה בטעינת נתונים", true);
            ToastManager.show('שגיאה בטעינת נתונים מהגיליון', 'error');
        }
    },
    
    async loadTrivia() {
        try {
            console.log("🎯 טוען שאלות טריוויה...");
            
            const response = await fetch(SHEET_CONFIG.triviaUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const csvText = await response.text();
            const rows = this.parseCSV(csvText);
            
            if (rows.length === 0) return;
            
            const headers = rows[0];
            triviaQuestions = rows.slice(1)
                .filter(row => row[0] && row[0].trim())
                .map(row => {
                    const obj = {};
                    headers.forEach((h, i) => {
                        obj[h.trim()] = row[i] ? row[i].trim().replace(/"/g, '') : '';
                    });
                    
                    return {
                        question: obj['שאלה'] || '',
                        answers: [
                            obj['תשובה 1'] || '',
                            obj['תשובה 2'] || '',
                            obj['תשובה 3'] || '',
                            obj['תשובה 4'] || ''
                        ].filter(a => a),
                        correct: Math.max(0, parseInt(obj['תשובה נכונה'] || '1', 10) - 1)
                    };
                })
                .filter(q => q.question && q.answers.length > 0);
            
            console.log(`🎯 נטענו ${triviaQuestions.length} שאלות טריוויה`);
            
        } catch (error) {
            console.error("❌ שגיאה בטעינת טריוויה:", error);
        }
    },
    
    parseCSV(csvText) {
        const lines = csvText.split('\n');
        return lines.map(line => {
            const result = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                const nextChar = line[i + 1];
                
                if (char === '"' && inQuotes && nextChar === '"') {
                    current += '"';
                    i++;
                } else if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    result.push(current);
                    current = '';
                } else {
                    current += char;
                }
            }
            result.push(current);
            return result;
        });
    },
    
    formatPhone(phone) {
        if (!phone) return '';
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length >= 9) {
            return '0' + cleaned.replace(/^0+/, '');
        }
        return phone;
    },
    
    updateUI() {
        if (typeof renderMarkers === 'function') renderMarkers();
        if (typeof updateParticipantCount === 'function') updateParticipantCount();
    },
    
    startAutoSync() {
        this.stopAutoSync();
        syncTimer = setInterval(() => {
            this.loadParticipants();
        }, SHEET_CONFIG.syncInterval);
        console.log("🔄 סנכרון אוטומטי הופעל");
    },
    
    stopAutoSync() {
        if (syncTimer) {
            clearInterval(syncTimer);
            syncTimer = null;
        }
    }
};

// אתחול מפה
const map = L.map('map').setView([31.5, 34.75], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// יצירת קבוצת סמנים (Marker Cluster Group)
const markers = L.markerClusterGroup();

// אייקון סמן מותאם
const createMarkerIcon = () => L.divIcon({
    className: 'modern-marker',
    html: `
        <div style="
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 6px 16px rgba(99, 102, 241, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        ">
            <div style="
                width: 16px;
                height: 16px;
                background: white;
                border-radius: 50%;
                transform: rotate(45deg);
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
            "></div>
        </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
});

// פונקציית עזר לחישוב מרחק (הוחזרה)
function distance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// עדכון מספר משתתפים
function updateParticipantCount() {
    const countElement = document.getElementById('participant-count');
    if (countElement) {
        countElement.textContent = `${participants.length} משתתפים`;
    }
}

// הצגת סמנים על המפה
function renderMarkers(list = participants) {
    console.log("🗺️ מציג סמנים על המפה...");
    
    // ניקוי סמנים קיימים מקבוצת הסמנים
    markers.clearLayers();
    
    // הוספת סמנים חדשים
    list.forEach((p, idx) => {
        if (!p.lat || !p.lon || isNaN(p.lat) || isNaN(p.lon)) return;
        
        const whatsappNum = (p.whatsapp && p.whatsapp.length > 0) ? p.whatsapp : p.phone;
        const hasWhatsapp = whatsappNum && whatsappNum.length >= 9;
        
        // לוגיקה לזיהוי משתמשים קרובים (הוחזרה)
        let nearby = null;
        for (let j = 0; j < participants.length; j++) {
            const other = participants[j];
            // ודא שלא משווים את המשתמש לעצמו, ושקואורדינטות קיימות
            if (other === p || !other.lat || !other.lon) continue;
            
            // נניח ש"קרוב" זה בטווח 10 ק"מ
            if (distance(p.lat, p.lon, other.lat, other.lon) <= 10) {
                nearby = other;
                break;
            }
        }

        const popup = `
            <div class="popup-box">
                <div class="popup-name">
                    <span class="material-symbols-outlined" style="color: #6366f1;">person</span>
                    ${p.name}
                </div>
                <div class="popup-city">
                    <span class="material-symbols-outlined" style="color: #6366f1;">location_on</span>
                    <span>${p.city}</span>
                </div>
                <div class="popup-phone">📞 ${p.phone.replace(/^0(\d{2,3})(\d{7})$/, '0$1-$2')}</div>
                <div class="popup-btns">
                    <a href="tel:${p.phone}" class="popup-btn phone" target="_blank">
                        <span class="material-symbols-outlined">call</span>
                        צור קשר
                    </a>
                    ${hasWhatsapp ? `
                    <a href="https://wa.me/972${whatsappNum.replace(/^0/,'')}?text=${encodeURIComponent(`היי ${p.firstName}, אשמח לתאם נסיעה משותפת למשלחת מאיה לאוגנדה! 🚗`)}" class="popup-btn whatsapp" target="_blank">
                        <span class="material-symbols-outlined">chat</span>
                        וואטסאפ
                    </a>
                    ` : ''}
                    ${admin ? `
                    <button class="popup-btn edit" onclick="editUser(${idx})">
                        <span class="material-symbols-outlined">edit</span>
                        ערוך
                    </button>
                    <button class="popup-btn delete" onclick="deleteUser(${idx})">
                        <span class="material-symbols-outlined">delete</span>
                        מחק
                    </button>
                    ` : ''}
                    ${nearby && hasWhatsapp ? `
                    <button class="popup-btn carpool" onclick="suggestCarpool('${p.name}', '${whatsappNum}')">
                        <span class="material-symbols-outlined">directions_car</span>
                        הצע נסיעה משותפת
                    </button>
                    ` : ''}
                </div>
            </div>
        `;
        
        const marker = L.marker([p.lat, p.lon], {icon: createMarkerIcon()});
        marker.bindPopup(popup, {closeButton: true, maxWidth: 350});
        markers.addLayer(marker); // הוספת הסמן לקבוצת הסמנים
    });
    
    map.addLayer(markers); // הוספת קבוצת הסמנים למפה
    
    console.log(`✅ הוצגו ${list.length} סמנים על המפה`);
}

// פונקציות ניהול משתמשים
window.editUser = function(idx) {
    if (!admin) {
        ToastManager.show('נדרשת הרשאת מנהל', 'error');
        return;
    }
    
    console.log(`✏️ עריכת משתמש: ${participants[idx].name}`);
    editIdx = idx;
    const p = participants[idx];
    
    document.getElementById('user-form-title').innerText = '✏️ עריכת משתתף';
    document.getElementById('user-first-name').value = p.firstName;
    document.getElementById('user-last-name').value = p.lastName;
    document.getElementById('user-city').value = p.city;
    document.getElementById('user-phone').value = p.phone;
    document.getElementById('user-whatsapp').value = p.whatsapp || '';
    
    document.getElementById('user-form-modal').hidden = false;
    GoogleSheetsSync.stopAutoSync(); // עצירת סנכרון אוטומטי בעת פתיחת מודל עריכה
};

window.deleteUser = function(idx) {
    if (!admin) {
        ToastManager.show('נדרשת הרשאת מנהל', 'error');
        return;
    }
    
    const user = participants[idx];
    if (confirm(`האם אתה בטוח שברצונך למחוק את ${user.name}?`)) {
        console.log(`🗑️ מוחק משתמש: ${user.name}`);

        const deletePayload = { id: user.name }; // או ID ייחודי אחר
        
        // שליחת בקשת מחיקה ל-Apps Script
        fetch(SHEET_CONFIG.appsScriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8' // Apps Script מצפה לפורמט זה
            },
            body: JSON.stringify({ action: 'delete', payload: deletePayload })
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                ToastManager.show(`${user.name} נמחק בהצלחה`);
                // טען מחדש את הנתונים כדי שהמפה תתעדכן
                GoogleSheetsSync.loadParticipants();
            } else {
                ToastManager.show(`שגיאה במחיקה: ${result.message}`, 'error');
            }
        })
        .catch(error => {
            console.error("❌ שגיאה במחיקת משתמש:", error);
            ToastManager.show('שגיאה במחיקת נתונים. נסה שוב.', 'error');
        });
    }
};

window.suggestCarpool = function(name, phone) {
    console.log(`🚗 הצעת נסיעה משותפת ל: ${name}`);
    const message = encodeURIComponent(`היי ${name}, רוצה לתאם נסיעה משותפת למשלחת מאיה לאוגנדה? 🚗✈️🇺🇬`);
    window.open(`https://wa.me/972${phone.replace(/^0/,'')}?text=${message}`, '_blank');
};


// מערכת אדמין
function setAdminMode(isAdminMode) {
    admin = isAdminMode;
    const loginBtn = document.getElementById('admin-login-btn');
    const logoutBtn = document.getElementById('admin-logout-btn');
    const addBtn = document.getElementById('add-user-btn');
    const adminControls = document.getElementById('admin-controls');
    
    if (isAdminMode) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'flex';
        addBtn.style.display = 'block';
        adminControls.style.display = 'flex';
        ToastManager.show('התחברת כמנהל בהצלחה! 🔐');
    } else {
        loginBtn.style.display = 'flex';
        logoutBtn.style.display = 'none';
        addBtn.style.display = 'none';
        adminControls.style.display = 'none';
        ToastManager.show('התנתקת בהצלחה! 👋');
    }
    
    renderMarkers();
}

// טריוויה
function initTrivia() {
    const triviaBtn = document.getElementById('trivia-btn');
    const triviaBox = document.getElementById('trivia-box');
    
    // ודא שהאלמנטים קיימים לפני ניסיון לגשת אליהם
    if (!triviaBtn || !triviaBox) return;

    triviaBtn.onclick = function() {
        if (triviaQuestions.length === 0) {
            triviaBox.innerHTML = '<p>אין שאלות זמינות כרגע. מתחבר לגיליון...</p>';
            GoogleSheetsSync.loadTrivia();
            return;
        }
        
        const idx = Math.floor(Math.random() * triviaQuestions.length);
        const q = triviaQuestions[idx];
        
        let html = `<p><b>${q.question}</b></p><div style="margin-top: 10px;">`;
        q.answers.forEach((ans, i) => {
            html += `<button onclick="checkTrivia(${idx},${i})" style="margin: 3px;">${ans}</button>`;
        });
        html += '</div>';
        
        triviaBox.innerHTML = html;
    };
}

window.checkTrivia = function(qIdx, ansIdx) {
    const q = triviaQuestions[qIdx];
    const triviaBox = document.getElementById('trivia-box');
    
    if (ansIdx === q.correct) {
        triviaBox.innerHTML = '<p style="color: green; font-weight: bold;">נכון! 🎉</p>';
        ToastManager.show('תשובה נכונה! 🎉');
    } else {
        triviaBox.innerHTML = `<p style="color: red; font-weight: bold;">לא נכון. התשובה הנכונה: ${q.answers[q.correct]}</p>`;
        ToastManager.show('תשובה שגויה 😞', 'error');
    }
    
    setTimeout(() => {
        triviaBox.innerHTML = '';
    }, 3000);
};

// מאזיני אירועים
document.addEventListener('DOMContentLoaded', function() {
    // אתחול מערכות
    SyncStatus.init();
    initTrivia(); // עדכון: כעת קורא ל-initTrivia עם בדיקת קיום אלמנטים
    
    // טעינה ראשונית
    GoogleSheetsSync.loadParticipants();
    GoogleSheetsSync.loadTrivia();
    GoogleSheetsSync.startAutoSync();
    
    // כפתור כניסת אדמין
    document.getElementById('admin-login-btn').addEventListener('click', () => {
        document.getElementById('admin-login-modal').hidden = false;
        document.getElementById('admin-password').focus();
    });
    
    // כפתור יציאת אדמין
    document.getElementById('admin-logout-btn').addEventListener('click', () => {
        setAdminMode(false);
    });
    
    // טופס כניסת אדמין
    document.getElementById('admin-login').addEventListener('click', () => {
        const password = document.getElementById('admin-password').value;
        
        if (password === adminPassword) {
            setAdminMode(true);
            document.getElementById('admin-login-modal').hidden = true;
            document.getElementById('admin-password').value = '';
        } else {
            ToastManager.show('סיסמה שגויה!', 'error');
            document.getElementById('admin-password').value = '';
        }
    });
    
    document.getElementById('admin-cancel').addEventListener('click', () => {
        document.getElementById('admin-login-modal').hidden = true;
        document.getElementById('admin-password').value = '';
    });
    
    // כפתור סנכרון ידני
    document.getElementById('sync-btn').addEventListener('click', () => {
        if (!admin) return;
        GoogleSheetsSync.loadParticipants();
        GoogleSheetsSync.loadTrivia();
    });
    
    // כפתור הוספת משתמש
    document.getElementById('add-user-btn').addEventListener('click', () => {
        if (!admin) return;
        
        editIdx = null;
        document.getElementById('user-form-title').innerText = '➕ הוסף משתתף';
        document.getElementById('user-first-name').value = '';
        document.getElementById('user-last-name').value = '';
        document.getElementById('user-city').value = '';
        document.getElementById('user-phone').value = '';
        document.getElementById('user-whatsapp').value = '';
        document.getElementById('user-form-modal').hidden = false;
        GoogleSheetsSync.stopAutoSync(); // עצירת סנכרון אוטומטי בעת פתיחת מודל הוספה
    });
    
    // ביטול טופס משתמש
    document.getElementById('user-cancel').addEventListener('click', () => {
        document.getElementById('user-form-modal').hidden = true;
        GoogleSheetsSync.startAutoSync(); // חידוש סנכרון אוטומטי בעת ביטול
    });
    
    // שמירת משתמש
    document.getElementById('user-save').addEventListener('click', async () => {
        if (!admin) return;
        
        const firstName = document.getElementById('user-first-name').value.trim();
        const lastName = document.getElementById('user-last-name').value.trim();
        const city = document.getElementById('user-city').value.trim();
        const phone = document.getElementById('user-phone').value.trim();
        const whatsapp = document.getElementById('user-whatsapp').value.trim();
        
        if (!firstName || !lastName || !city || !phone) {
            ToastManager.show('אנא מלא את כל השדות הנדרשים', 'error');
            return;
        }
        
        const fullName = `${firstName} ${lastName}`;
        
        // נתוני המשתמש שישלחו ל-Apps Script, מותאמים לכותרות הגיליון
        const userData = {
            'שם פרטי': firstName,
            'שם משפחה': lastName,
            'עיר': city,
            'מספר טלפון': phone,
            'מספר ווצאפ': whatsapp,
            // Lat ו-Lon לא נשלחים ישירות מכאן כי האפליקציה לא עושה גאוקודינג בצד הלקוח.
            // הם נטענים מהגיליון. אם תרצה לעדכן אותם, תצטרך לכלול לוגיקת גאוקודינג כאן
            // או ב-Apps Script.
            'Lat': (editIdx !== null) ? participants[editIdx].lat : null, // שמירה על קואורדינטות קיימות בעריכה
            'Lon': (editIdx !== null) ? participants[editIdx].lon : null,
        };

        // קבע את הפעולה
        let action = 'add';
        if (editIdx !== null) {
            action = 'update';
            // עבור עדכון, ה-Apps Script מזהה לפי שם פרטי ושם משפחה (בדוגמה שלנו)
            // עדיף להעביר ID ייחודי מהאפליקציה ל-Apps Script אם קיים.
        }

        try {
            const saveBtn = document.getElementById('user-save');
            saveBtn.disabled = true;
            saveBtn.innerHTML = '<span class="material-symbols-outlined">autorenew</span> שומר...';

            // שלח נתונים ל-Google Apps Script
            const response = await fetch(SHEET_CONFIG.appsScriptUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8' // Apps Script מצפה לפורמט זה
                },
                body: JSON.stringify({ action, payload: userData })
            });

            const result = await response.json();

            if (result.status === 'success') {
                ToastManager.show(`${fullName} ${action === 'add' ? 'נוסף' : 'עודכן'} בהצלחה!`);
                // לאחר שמירה מוצלחת, טען מחדש את הנתונים מהגיליון
                // כדי שהמפה תתעדכן עם הנתונים העדכניים (כולל Lat/Lon אם הם נטענים מחדש)
                await GoogleSheetsSync.loadParticipants(); 
            } else {
                ToastManager.show(`שגיאה בשמירה: ${result.message}`, 'error');
            }
            
            document.getElementById('user-form-modal').hidden = true;
            editIdx = null; // איפוס
            GoogleSheetsSync.startAutoSync(); // חידוש סנכרון אוטומטי בעת שמירה
        } catch (err) {
            console.error("❌ שגיאה בשמירת משתמש:", err);
            ToastManager.show('שגיאה בשמירת נתונים. נסה שוב.', 'error');
        } finally {
            const saveBtn = document.getElementById('user-save');
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<span class="material-symbols-outlined">save</span> שמירה';
        }
    });
    
    // חיפוש
    document.getElementById('search-input').addEventListener('input', function() {
        const val = this.value.trim().toLowerCase();
        
        if (!val) {
            renderMarkers();
            return;
        }
        
        const filtered = participants.filter(p =>
            p.name.toLowerCase().includes(val) ||
            p.city.toLowerCase().includes(val) ||
            p.phone.includes(val)
        );
        
        renderMarkers(filtered);
    });
    
    // סגירת מודלים בלחיצה חיצונית
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.hidden = true;
            GoogleSheetsSync.startAutoSync(); // חידוש סנכרון אוטומטי בעת סגירה חיצונית
        }
    });
    
    // התאמת מפה לגודל החלון
    window.addEventListener('resize', () => {
        map.invalidateSize();
    });
    
    setTimeout(() => {
        map.invalidateSize();
    }, 500);

    // לוגיקה לכפתור "איפוס מפה" חדש
    document.getElementById('reset-map-btn').addEventListener('click', () => {
        map.setView([31.5, 34.75], 8); // חזרה למיקום ולזום ההתחלתיים
        ToastManager.show('תצוגת המפה אופסה! 🌍');
    });
});

// ניקוי בסגירת האפליקציה
window.addEventListener('beforeunload', () => {
    GoogleSheetsSync.stopAutoSync();
});

console.log("✅ אפליקציית מאיה מחוברת לגוגל שיטס מוכנה לשימוש!");
�