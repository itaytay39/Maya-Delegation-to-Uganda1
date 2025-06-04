// 🚀 מערכת ניהול נתונים מתקדמת - מאיה משלחת לאוגנדה 2025
console.log("🚀 מתחיל אתחול אפליקציית מאיה מתקדמת...");

// נתונים בסיסיים - 35 משתמשים לדוגמה
let participants = [
    { name: 'רני אורן', city: 'עדי', lat: 32.782353, lon: 35.173412, phone: '0522420453', whatsapp: '0522420453' },
    { name: 'הילה אשכנזי', city: 'כפר סבא', lat: 32.178195, lon: 34.90761, phone: '0548008647', whatsapp: '0548008647' },
    { name: 'אנה בובקו', city: 'הרצליה', lat: 32.162413, lon: 34.844675, phone: '0528085637', whatsapp: '0528085637' },
    { name: 'בר גוטמן', city: 'פתח תקווה', lat: 32.084041, lon: 34.887762, phone: '0545867522', whatsapp: '0545867522' },
    { name: 'שירה גולדנברג אורן', city: 'תל אביב', lat: 32.0852999, lon: 34.7817676, phone: '0544888746', whatsapp: '0544888746' },
    { name: 'גלית גולן', city: 'עדי', lat: 32.782353, lon: 35.173412, phone: '0522420452', whatsapp: '0522420452' },
    { name: 'נועה גלילוב', city: 'בית חשמונאי', lat: 31.890298, lon: 34.917599, phone: '0585566005', whatsapp: '0585566005' },
    { name: 'מרים זמנאיי גלה', city: 'יבנה', lat: 31.8753534, lon: 34.7350096, phone: '0512863296', whatsapp: '0512863296' },
    { name: 'עדן גלילוב', city: 'חיפה', lat: 32.7940463, lon: 34.989571, phone: '0526557027', whatsapp: '0526557027' },
    { name: 'עמית גפני', city: 'נתניה', lat: 32.321458, lon: 34.853196, phone: '0556654244', whatsapp: '0556654244' },
    { name: 'יובל דדון', city: 'קריית מוצקין', lat: 32.8390366, lon: 35.0821062, phone: '0549056171', whatsapp: '0549056171' },
    { name: 'הילה הרלי', city: 'כפר סבא', lat: 32.178195, lon: 34.90761, phone: '0542631959', whatsapp: '0542631959' },
    { name: 'הדר וזאני', city: 'יבנה', lat: 31.8753534, lon: 34.7350096, phone: '0508699736', whatsapp: '0508699736' },
    { name: 'חיה זגרון', city: 'באר שבע', lat: 31.2521018, lon: 34.7867691, phone: '0522703301', whatsapp: '0522703301' },
    { name: 'מיקה זילברברג', city: 'עשרת', lat: 31.824913, lon: 34.747459, phone: '0547689979', whatsapp: '0547689979' },
    { name: 'דנה חזן', city: 'קיבוץ נגבה', lat: 31.662547, lon: 34.679561, phone: '0548357500', whatsapp: '0548357500' },
    { name: 'ספיר יחזקאל', city: 'באר יעקוב', lat: 31.943507, lon: 34.83904, phone: '0549844472', whatsapp: '0549844472' },
    { name: 'ורד יעקבי', city: 'שמשית', lat: 32.732527, lon: 35.246518, phone: '0548045636', whatsapp: '0548045636' },
    { name: 'הדר יעקבי', city: 'שמשית', lat: 32.732527, lon: 35.246518, phone: '0548318389', whatsapp: '0548318389' },
    { name: 'לימור יצחק', city: 'נס ציונה', lat: 31.932111, lon: 34.801327, phone: '0523405095', whatsapp: '0523405095' },
    { name: 'נועה כהן', city: 'בנימינה', lat: 32.517078, lon: 34.955096, phone: '0532794929', whatsapp: '0532794929' },
    { name: 'מיטל כץ', city: 'מודיעין', lat: 31.890267, lon: 35.010397, phone: '0526578078', whatsapp: '0526578078' },
    { name: 'רן לוי', city: 'ראשלצ', lat: 31.9590813, lon: 34.8020886, phone: '0503464045', whatsapp: '0503464045' },
    { name: 'שירה לוי', city: 'קרית ביאליק', lat: 32.8408396, lon: 35.0916456, phone: '0526122460', whatsapp: '0526122460' },
    { name: 'ליאור לוי', city: 'קריית ביאליק', lat: 32.8408396, lon: 35.0916456, phone: '0526547604', whatsapp: '0526547604' },
    { name: 'דורין לי לוי', city: 'ראשון לציון', lat: 31.9590813, lon: 34.8020886, phone: '0508221128', whatsapp: '0508221128' },
    { name: 'מיה ליטמנוביץ', city: 'נטעים', lat: 31.945689, lon: 34.775145, phone: '0525554803', whatsapp: '0525554803' },
    { name: 'יעל לנדאו', city: 'נוה צוף', lat: 32.008313, lon: 35.128876, phone: '0545070548', whatsapp: '0545070548' },
    { name: 'עומר מנור', city: 'מושב ביצרון', lat: 31.796565, lon: 34.727378, phone: '0545552463', whatsapp: '0545552463' },
    { name: 'יוסי עמר', city: 'חצור הגלילית', lat: 32.980382, lon: 35.543548, phone: '0506468842', whatsapp: '0506468842' },
    { name: 'נורית פוקס', city: 'שמשית', lat: 32.732527, lon: 35.246518, phone: '0544681134', whatsapp: '0544681134' },
    { name: 'אלה פיקל', city: 'מודיעין', lat: 31.890267, lon: 35.010397, phone: '0542565752', whatsapp: '0542565752' },
    { name: 'אוראל פנקר', city: 'רמלה', lat: 31.931566, lon: 34.872938, phone: '0545661176', whatsapp: '0545661176' },
    { name: 'אליה פרבר', city: 'תל אביב', lat: 32.0852999, lon: 34.7817676, phone: '0507917995', whatsapp: '0507917995' },
    { name: 'חני פרלה', city: 'בית דגן', lat: 32.002465, lon: 34.8295485, phone: '0526897300', whatsapp: '0526897300' },
    { name: 'אוקסנה קולסניק', city: 'יבנה', lat: 31.8753534, lon: 34.7350096, phone: '0508322332', whatsapp: '0508322332' }
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

console.log("🚀 מתחיל עיבוד נתונים ראשוני...");

// מחיקת נתונים ישנים מה-localStorage כדי לטעון מהקוד החדש
localStorage.removeItem('maya-participants');

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
