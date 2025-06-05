// הגדרות מערכת
const SHEET_CONFIG = {
    spreadsheetId: '1zunKbBVc74mtXfXkHjMDvQSpbu9n2PSasrxQ1CsRmvg',
    participantsUrl: 'https://docs.google.com/spreadsheets/d/1zunKbBVc74mtXfXkHjMDvQSpbu9n2PSasrxQ1CsRmvg/gviz/tq?tqx=out:csv',
    triviaUrl: 'https://docs.google.com/spreadsheets/d/1zunKbBVc74mtXfXkHjMDvQSpbu9n2PSasrxQ1CsRmvg/gviz/tq?tqx=out:csv&sheet=טריוויה',
    syncInterval: 30000
};

// משתנים גלובליים
let participants = [];
let triviaQuestions = [];
let admin = false;
const adminPassword = "1234";
let editIdx = null;
let syncTimer = null;
let map = null;
let oms = null;

// אתחול מפה ו-Spiderfier
function initMap() {
    map = L.map('map').setView([31.5, 34.75], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    oms = new OverlappingMarkerSpiderfier(map, {
        keepSpiderfied: true,
        nearbyDistance: 20,
        circleSpiralSwitchover: 9,
        legWeight: 1.5
    });
}

// יצירת אייקון סמן
function createMarkerIcon() {
    return L.divIcon({
        className: 'modern-marker',
        html: `
            <div class="marker-pin">
                <div class="inner-circle"></div>
            </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36]
    });
}

// הצגת סמנים במפה
function renderMarkers(list = participants) {
    // ניקוי סמנים קיימים
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    oms.unspiderfy();
    oms.clearMarkers();

    // הוספת סמנים חדשים
    list.forEach((p, idx) => {
        if (!p.lat || !p.lon || isNaN(p.lat) || isNaN(p.lon)) return;

        const marker = L.marker([p.lat, p.lon], {
            icon: createMarkerIcon(),
            title: p.name
        });

        const popupContent = generatePopupContent(p, idx);
        marker.bindPopup(popupContent, { 
            closeButton: true, 
            maxWidth: 350,
            autoClose: false
        });

        marker.on('click', (e) => {
            if (admin) return;
            e.target.openPopup();
        });

        oms.addMarker(marker);
        marker.addTo(map);
    });
}

// יצירת תוכן פופ-אפ
function generatePopupContent(p, idx) {
    const whatsappNum = (p.whatsapp && p.whatsapp.length > 0) ? p.whatsapp : p.phone;
    const hasWhatsapp = whatsappNum && whatsappNum.length >= 9;

    return `
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
            </div>
        </div>
    `;
}

// שאר הפונקציות (טעינת נתונים, ניהול משתמשים, טריוויה) נשארות כמו בקוד המקורי
// ... (המשך הקוד כפי שהיה קודם לכן)

// אתחול המערכת
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    SyncStatus.init();
    initTrivia();
    GoogleSheetsSync.loadParticipants();
    GoogleSheetsSync.loadTrivia();
    GoogleSheetsSync.startAutoSync();
    
    // שאר האתחול כפי שהיה קודם
    // ... (המשך הקוד כפי שהיה קודם לכן)
});

console.log("✅ אפליקציית מאיה מחוברת לגוגל שיטס מוכנה לשימוש!");
