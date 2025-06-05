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
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    oms = new OverlappingMarkerSpiderfier(map, {
        keepSpiderfied: true,
        nearbyDistance: 50,
        circleSpiralSwitchover: 9,
        legWeight: 1.5
    });

    // הוספת אירועי סנכרון למפה
    oms.addListener('spiderfy', function(markers) {
        console.log('Spiderfied:', markers);
    });
    
    oms.addListener('unspiderfy', function(markers) {
        console.log('Unspiderfied:', markers);
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

        oms.addMarker(marker);
        marker.addTo(map);
    });
}

// שאר הקוד ללא שינוי (טעינת נתונים, ניהול משתמשים, אירועים וכו')
// ... המשך הקוד כפי שהיה קודם לכן

// אתחול המערכת
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    SyncStatus.init();
    initTrivia();
    GoogleSheetsSync.loadParticipants();
    GoogleSheetsSync.loadTrivia();
    GoogleSheetsSync.startAutoSync();
    
    // שאר האתחול כפי שהיה קודם
    // ... המשך הקוד כפי שהיה קודם לכן
});
