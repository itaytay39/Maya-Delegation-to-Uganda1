// 🚀 מערכת ניהול נתונים מתקדמת - מאיה משלחת לאוגנדה 2025
console.log("🚀 מתחיל אתחול אפליקציית מאיה מתקדמת...");

// נתונים בסיסיים - 35 משתמשים לדוגמה
let participants = [
    {name: 'נועה בר', city: 'תל אביב', lat: 32.0853, lon: 34.7818, phone: '0501111111', whatsapp: '0501111111'},
    {name: 'דוד לוי', city: 'חיפה', lat: 32.7940, lon: 34.9896, phone: '0522222222', whatsapp: '0522222222'},
    {name: 'רוני ישראלי', city: 'ירושלים', lat: 31.7683, lon: 35.2137, phone: '0533333333', whatsapp: '0533333333'},
    {name: 'אור בן דוד', city: 'באר שבע', lat: 31.2518, lon: 34.7913, phone: '0544444444', whatsapp: '0544444444'},
    {name: 'תמר שלו', city: 'אילת', lat: 29.5581, lon: 34.9482, phone: '0505555555', whatsapp: '0505555555'},
    {name: 'יונתן כהן', city: 'נתניה', lat: 32.3215, lon: 34.8532, phone: '0506666666', whatsapp: '0506666666'},
    {name: 'שירה מרקו', city: 'פתח תקווה', lat: 32.0879, lon: 34.8883, phone: '0507777777', whatsapp: '0507777777'},
    {name: 'עמית רוזן', city: 'ראשון לציון', lat: 31.9730, lon: 34.7925, phone: '0508888888', whatsapp: '0508888888'},
    {name: 'מיכל שמיר', city: 'הרצליה', lat: 32.1624, lon: 34.8441, phone: '0509999999', whatsapp: '0509999999'},
    {name: 'אלון ברק', city: 'כפר סבא', lat: 32.1742, lon: 34.9063, phone: '0500000001', whatsapp: '0500000001'},
    {name: 'רחל אביטל', city: 'רמת גן', lat: 32.0809, lon: 34.8199, phone: '0500000002', whatsapp: '0500000002'},
    {name: 'גיל פרידמן', city: 'בני ברק', lat: 32.0809, lon: 34.8312, phone: '0500000003', whatsapp: '0500000003'},
    {name: 'לילך גולן', city: 'רחובות', lat: 31.8968, lon: 34.8186, phone: '0500000004', whatsapp: '0500000004'},
    {name: 'אסף אליהו', city: 'מודיעין', lat: 31.8970, lon: 35.0066, phone: '0500000005', whatsapp: '0500000005'},
    {name: 'ענת לבי', city: 'קריית גת', lat: 31.6100, lon: 34.7642, phone: '0500000006', whatsapp: '0500000006'},
    {name: 'רם צדוק', city: 'אשדוד', lat: 31.7948, lon: 34.6553, phone: '0500000007', whatsapp: '0500000007'},
    {name: 'דנה אשכנזי', city: 'אשקלון', lat: 31.6688, lon: 34.5742, phone: '0500000008', whatsapp: '0500000008'},
    {name: 'יעקב מזרחי', city: 'עכו', lat: 32.9253, lon: 35.0818, phone: '0500000009', whatsapp: '0500000009'},
    {name: 'טליה גבע', city: 'נהריה', lat: 33.0073, lon: 35.0944, phone: '0500000010', whatsapp: '0500000010'},
    {name: 'מאיר שושן', city: 'צפת', lat: 32.9650, lon: 35.4950, phone: '0500000011', whatsapp: '0500000011'},
    {name: 'נירית אלמוג', city: 'טבריה', lat: 32.7940, lon: 35.5454, phone: '0500000012', whatsapp: '0500000012'},
    {name: 'ישי אורן', city: 'בית שאן', lat: 32.4970, lon: 35.4990, phone: '0500000013', whatsapp: '0500000013'},
    {name: 'שלומית דן', city: 'עפולה', lat: 32.6073, lon: 35.2889, phone: '0500000014', whatsapp: '0500000014'},
    {name: 'רובי אבן', city: 'נצרת', lat: 32.7018, lon: 35.3034, phone: '0500000015', whatsapp: '0500000015'},
    {name: 'יעל ברוך', city: 'דימונה', lat: 31.0686, lon: 35.0330, phone: '0500000016', whatsapp: '0500000016'},
    {name: 'איתמר רגב', city: 'ערד', lat: 31.2587, lon: 35.2130, phone: '0500000017', whatsapp: '0500000017'},
    {name: 'חגית נחום', city: 'מצפה רמון', lat: 30.6093, lon: 34.8017, phone: '0500000018', whatsapp: '0500000018'},
    {name: 'אריאל כץ', city: 'קריית שמונה', lat: 33.2090, lon: 35.5695, phone: '0500000019', whatsapp: '0500000019'},
    {name: 'מרב דוד', city: 'בית שמש', lat: 31.7530, lon: 35.0066, phone: '0500000020', whatsapp: '0500000020'},
    {name: 'אילן מנור', city: 'לוד', lat: 31.9516, lon: 34.8882, phone: '0500000021', whatsapp: '0500000021'},
    {name: 'קרן אטיאס', city: 'רמלה', lat: 31.9299, lon: 34.8670, phone: '0500000022', whatsapp: '0500000022'},
    {name: 'דור ביטון', city: 'יבנה', lat: 31.8770, lon: 34.7370, phone: '0500000023', whatsapp: '0500000023'},
    {name: 'הדס לוין', city: 'גדרה', lat: 31.8160, lon: 34.7751, phone: '0500000024', whatsapp: '0500000024'},
    {name: 'עידו פלג', city: 'קריית מלאכי', lat: 31.7303, lon: 34.7453, phone: '0500000025', whatsapp: '0500000025'},
    {name: 'רונית שפיר', city: 'קריית ביאליק', lat: 32.8298, lon: 35.0889, phone: '0500000026', whatsapp: '0500000026'}
];

let admin = false;
const adminPassword = "1234";
let editIdx = null;

// מערכת אחסון מתקדמת
const StorageManager = {
    save: () => {
        try {
            localStorage.setItem('maya-participants', JSON.stringify(participants));
            localStorage.setItem('maya-last-update', new Date().toISOString());
            console.log("💾 נתונים נשמרו ב-localStorage");
        } catch (error) {
            console.error("❌ שגיאה בשמירת נתונים:", error);
        }
    },
    
    load: () => {
        try {
            const saved = localStorage.getItem('maya-participants');
            const lastUpdate = localStorage.getItem('maya-last-update');
            
            if (saved) {
                const savedData = JSON.parse(saved);
                if (savedData.length > 0) {
                    participants = savedData;
                    console.log(`📂 נטענו ${participants.length} משתתפים מ-localStorage`);
                    console.log(`📅 עדכון אחרון: ${lastUpdate}`);
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error("❌ שגיאה בטעינת נתונים:", error);
            return false;
        }
    }
};

// מערכת הודעות
const ToastManager = {
    show: (message, type = 'success') => {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => container.removeChild(toast), 300);
        }, 3000);
    }
};

// הגנת אדמין מתקדמת
const AdminGuard = {
    isAdmin: () => admin,
    requireAdmin: (callback) => {
        if (!admin) {
            console.warn("🚫 ניסיון גישה לא מורשה לפונקציית אדמין");
            ToastManager.show("נדרשת הרשאת מנהל לפעולה זו", "error");
            return false;
        }
        return callback();
    }
};

// אתחול מפה
const map = L.map('map').setView([31.5, 34.75], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// אייקון סמן מודרני מתקדם
const modernMarkerIcon = L.divIcon({
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

// אלמנטים
const adminModal = document.getElementById('admin-login-modal');
const userModal = document.getElementById('user-form-modal');
const addBtn = document.getElementById('add-user-btn');
const adminControls = document.getElementById('admin-controls');
const searchInput = document.getElementById('search-input');
const participantCount = document.getElementById('participant-count');
const fileInput = document.getElementById('file-input');

// פונקציות עזר
function distance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

async function geocodeCity(city) {
    try {
        console.log(`🔍 מחפש מיקום עבור: ${city}`);
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city + ', ישראל')}`;
        const resp = await fetch(url, {headers: {'Accept-Language': 'he'}});
        const data = await resp.json();
        if (data && data.length > 0) {
            console.log(`✅ נמצא מיקום עבור ${city}`);
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
        }
        throw new Error('לא נמצא מיקום לעיר שהוזנה');
    } catch (error) {
        console.error(`❌ שגיאה בחיפוש מיקום עבור ${city}:`, error);
        throw new Error('שגיאה בחיפוש מיקום העיר');
    }
}

// עדכון מספר משתתפים
function updateParticipantCount() {
    participantCount.textContent = `${participants.length} משתתפים`;
    console.log(`📊 עודכן מספר משתתפים: ${participants.length}`);
}

// הוספת סמנים למפה
function renderMarkers(list = participants) {
    console.log("🗺️ מציג סמנים על המפה...");
    
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) map.removeLayer(layer);
    });
    
    list.forEach((p, idx) => {
        const whatsappNum = (p.whatsapp && p.whatsapp.length > 0) ? p.whatsapp : p.phone;
        const hasWhatsapp = whatsappNum && whatsappNum.length >= 9;
        
        let nearby = null;
        for (let j = 0; j < participants.length; j++) {
            const other = participants[j];
            if (other === p) continue;
            if (
                typeof other.lat === "number" &&
                typeof other.lon === "number" &&
                distance(p.lat, p.lon, other.lat, other.lon) <= 20
            ) {
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
                    <a href="https://wa.me/972${whatsappNum.replace(/^0/,'')}" class="popup-btn whatsapp" target="_blank">
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
        
        const marker = L.marker([p.lat, p.lon], {icon: modernMarkerIcon}).addTo(map);
        marker.bindPopup(popup, {closeButton: true, maxWidth: 350});
    });
    
    console.log(`✅ הוצגו ${list.length} סמנים על המפה`);
}

// פונקציות גלובליות לשימוש בפופאפ
window.editUser = function(idx) {
    return AdminGuard.requireAdmin(() => {
        console.log(`✏️ עריכת משתמש: ${participants[idx].name}`);
        editIdx = idx;
        const p = participants[idx];
        document.getElementById('user-form-title').innerText = '✏️ עריכת משתתף';
        document.getElementById('user-name').value = p.name;
        document.getElementById('user-city').value = p.city;
        document.getElementById('user-phone').value = p.phone;
        document.getElementById('user-whatsapp').value = p.whatsapp || '';
        userModal.hidden = false;
    });
};

window.deleteUser = function(idx) {
    return AdminGuard.requireAdmin(() => {
        const user = participants[idx];
        if (confirm(`האם אתה בטוח שברצונך למחוק את ${user.name}?`)) {
            console.log(`🗑️ מוחק משתמש: ${user.name}`);
            participants.splice(idx, 1);
            StorageManager.save();
            renderMarkers();
            updateParticipantCount();
            ToastManager.show(`${user.name} נמחק בהצלחה`);
        }
    });
};

window.suggestCarpool = function(name, phone) {
    console.log(`🚗 הצעת נסיעה משותפת ל: ${name}`);
    const message = encodeURIComponent(`היי ${name}, רוצה לתאם נסיעה משותפת למשלחת מאיה לאוגנדה? 🚗✈️🇺🇬`);
    window.open(`https://wa.me/972${phone.replace(/^0/,'')}?text=${message}`, '_blank');
};

// ניהול מצב אדמין מתקדם
function setAdminMode(isAdminMode) {
    admin = isAdminMode;
    const loginBtn = document.getElementById('admin-login-btn');
    const logoutBtn = document.getElementById('admin-logout-btn');
    
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

// יבוא מקבצי Excel/CSV
function importFromFile(file) {
    return AdminGuard.requireAdmin(() => {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                let data;
                if (file.name.endsWith('.csv')) {
                    // טיפול ב-CSV
                    const csv = e.target.result;
                    const lines = csv.split('\n');
                    data = lines.slice(1).map(line => {
                        const [name, city, phone, whatsapp] = line.split(',');
                        return { name: name?.trim(), city: city?.trim(), phone: phone?.trim(), whatsapp: whatsapp?.trim() };
                    }).filter(item => item.name && item.city && item.phone);
                } else {
                    // טיפול ב-Excel
                    const workbook = XLSX.read(e.target.result, {type: 'binary'});
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    data = XLSX.utils.sheet_to_json(worksheet);
                }
                
                // הוספת קואורדינטות לכל משתתף
                processImportedData(data);
                
            } catch (error) {
                console.error('❌ שגיאה ביבוא קובץ:', error);
                ToastManager.show('שגיאה בקריאת הקובץ', 'error');
            }
        };
        
        if (file.name.endsWith('.csv')) {
            reader.readAsText(file);
        } else {
            reader.readAsBinaryString(file);
        }
    });
}

async function processImportedData(data) {
    console.log(`📥 מעבד ${data.length} רשומות מקובץ יבוא...`);
    let successCount = 0;
    
    for (const item of data) {
        try {
            const { lat, lon } = await geocodeCity(item.city);
            participants.push({
                name: item.name,
                city: item.city,
                lat,
                lon,
                phone: item.phone,
                whatsapp: item.whatsapp || ''
            });
            successCount++;
            await new Promise(resolve => setTimeout(resolve, 200)); // למנוע spam ל-API
        } catch (error) {
            console.warn(`⚠️ לא ניתן למצוא מיקום עבור ${item.city}`);
        }
    }
    
    StorageManager.save();
    renderMarkers();
    updateParticipantCount();
    ToastManager.show(`יובאו בהצלחה ${successCount} משתתפים!`);
}

// יצוא ל-Excel
function exportToExcel() {
    return AdminGuard.requireAdmin(() => {
        const exportData = participants.map(p => ({
            'שם': p.name,
            'עיר': p.city,
            'טלפון': p.phone,
            'וואטסאפ': p.whatsapp || '',
            'קו רוחב': p.lat,
            'קו אורך': p.lon
        }));
        
        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "משתתפים");
        
        const fileName = `maya-participants-${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);
        
        ToastManager.show('הקובץ יוצא בהצלחה! 📊');
    });
}

// מאזיני אירועים
document.getElementById('admin-login-btn').addEventListener('click', () => {
    console.log("🔐 נפתח מודל כניסת אדמין");
    adminModal.hidden = false;
    document.getElementById('admin-password').focus();
});

document.getElementById('admin-logout-btn').addEventListener('click', () => {
    console.log("🚪 התנתקות אדמין");
    setAdminMode(false);
});

document.getElementById('admin-cancel').addEventListener('click', () => {
    adminModal.hidden = true;
    document.getElementById('admin-password').value = '';
});

document.getElementById('admin-login').addEventListener('click', () => {
    const password = document.getElementById('admin-password').value;
    console.log("🔑 ניסיון התחברות אדמין");
    
    if (password === adminPassword) {
        setAdminMode(true);
        adminModal.hidden = true;
        document.getElementById('admin-password').value = '';
        console.log("✅ התחברות אדמין הצליחה");
    } else {
        console.warn("❌ ניסיון התחברות אדמין נכשל");
        ToastManager.show('סיסמה שגויה!', 'error');
        document.getElementById('admin-password').value = '';
    }
});

// כפתורי יבוא ויצוא
document.getElementById('import-btn').addEventListener('click', () => {
    fileInput.click();
});

document.getElementById('export-btn').addEventListener('click', exportToExcel);

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        importFromFile(file);
        e.target.value = ''; // איפוס הקלט
    }
});

// הוספת משתמש
addBtn.addEventListener('click', () => {
    return AdminGuard.requireAdmin(() => {
        console.log("➕ פתיחת טופס הוספת משתמש");
        editIdx = null;
        document.getElementById('user-form-title').innerText = '➕ הוסף משתתף';
        document.getElementById('user-name').value = '';
        document.getElementById('user-city').value = '';
        document.getElementById('user-phone').value = '';
        document.getElementById('user-whatsapp').value = '';
        userModal.hidden = false;
    });
});

document.getElementById('user-cancel').addEventListener('click', () => {
    userModal.hidden = true;
});

// שמירת משתמש
document.getElementById('user-save').addEventListener('click', async () => {
    return AdminGuard.requireAdmin(async () => {
        const name = document.getElementById('user-name').value.trim();
        const city = document.getElementById('user-city').value.trim();
        const phone = document.getElementById('user-phone').value.trim();
        const whatsapp = document.getElementById('user-whatsapp').value.trim();
        
        if (!name || !city || !phone) {
            ToastManager.show('אנא מלא את כל השדות הנדרשים', 'error');
            return;
        }
        
        if (!/^0\d{8,9}$/.test(phone)) {
            ToastManager.show('מספר טלפון לא תקין', 'error');
            return;
        }
        
        try {
            const saveBtn = document.getElementById('user-save');
            saveBtn.disabled = true;
            saveBtn.innerHTML = '<span class="material-symbols-outlined">autorenew</span> שומר...';
            
            console.log(`💾 שומר משתמש: ${name} מ${city}`);
            const { lat, lon } = await geocodeCity(city);
            
            if (editIdx !== null) {
                console.log(`✏️ עודכן משתמש: ${participants[editIdx].name} → ${name}`);
                participants[editIdx] = {name, city, lat, lon, phone, whatsapp};
                editIdx = null;
                ToastManager.show(`${name} עודכן בהצלחה!`);
            } else {
                console.log(`➕ נוסף משתמש חדש: ${name}`);
                participants.push({name, city, lat, lon, phone, whatsapp});
                ToastManager.show(`${name} נוסף בהצלחה!`);
            }
            
            StorageManager.save();
            userModal.hidden = true;
            renderMarkers();
            updateParticipantCount();
            
        } catch (err) {
            console.error("❌ שגיאה בשמירת משתמש:", err);
            ToastManager.show('לא נמצא מיקום לעיר שהוזנה. אנא בדוק את שם העיר.', 'error');
        } finally {
            const saveBtn = document.getElementById('user-save');
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<span class="material-symbols-outlined">save</span> שמירה';
        }
    });
});

// חיפוש
searchInput.addEventListener('input', function() {
    const val = this.value.trim().toLowerCase();
    console.log(`🔍 חיפוש: "${val}"`);
    
    if (!val) {
        renderMarkers();
        return;
    }
    const filtered = participants.filter(p =>
        p.name.toLowerCase().includes(val) || 
        p.city.toLowerCase().includes(val) || 
        p.phone.includes(val)
    );
    console.log(`📋 נמצאו ${filtered.length} תוצאות חיפוש`);
    renderMarkers(filtered);
});

// סגירת מודלים בלחיצה חיצונית
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.hidden = true;
    }
});

// אתחול ראשוני
window.addEventListener('resize', () => { map.invalidateSize(); });
setTimeout(() => { map.invalidateSize(); }, 500);

// טעינת נתונים מ-localStorage או שימוש בברירת מחדל
console.log("🚀 מתחיל עיבוד נתונים ראשוני...");
if (!StorageManager.load()) {
    console.log("📦 משתמש בנתונים לדוגמה");
    StorageManager.save(); // שמירה ראשונית
}

renderMarkers();
updateParticipantCount();
console.log("✅ אפליקציית מאיה מוכנה לשימוש!");

// הוספת CSS לאנימציית slideOut
const additionalCSS = `
@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}
`;
const style = document.createElement('style');
style.innerHTML = additionalCSS;
document.head.appendChild(style);

// 📊 סטטיסטיקות למפתחים
console.log(`
📊 סטטיסטיקות המערכת:
👥 משתתפים: ${participants.length}
🔐 מצב אדמין: ${admin ? 'מחובר' : 'מנותק'}
🗺️ מרכז מפה: [31.5, 34.75]
🎨 עיצוב: Material Design 3 מתקדם
📱 רספונסיבי: מותאם למובייל בלבד
🔍 חיפוש: זמין
🚗 נסיעות משותפות: זמין
📊 יבוא/יצוא Excel: זמין לאדמין
💾 אחסון: localStorage
🔐 הגנת אדמין: מתקדמת
`);
