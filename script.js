// Bettiah Maps - JavaScript File
// This file initializes and manages Google Maps functionality for Bettiah, Bihar

// Bettiah coordinates (Bihar, India)
const BETTIAH_CENTER = {
    lat: 26.8022,
    lng: 84.5025
};

// Initialize map and service variables
let map;
let service;
let infoWindow;
let markers = [];

// Initialize Google Map when DOM is ready
function initMap() {
    // Create map centered on Bettiah
    map = new google.maps.Map(document.getElementById('map'), {
        center: BETTIAH_CENTER,
        zoom: 14,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
        },
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true
    });

    // Initialize Places Service
    service = new google.maps.places.PlacesService(map);
    
    // Initialize InfoWindow
    infoWindow = new google.maps.InfoWindow();

    // Add marker for Bettiah center
    addCenterMarker();
    
    // Add some important landmarks
    addImportantLandmarks();
}

// Add a marker at Bettiah center
function addCenterMarker() {
    const marker = new google.maps.Marker({
        position: BETTIAH_CENTER,
        map: map,
        title: 'Bettiah, Bihar',
        icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        },
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', () => {
        infoWindow.setContent(`
            <div class="info-window">
                <h3>Bettiah</h3>
                <p><strong>District:</strong> West Champaran</p>
                <p><strong>State:</strong> Bihar, India</p>
                <p>Welcome to Bettiah Maps!</p>
            </div>
        `);
        infoWindow.open(map, marker);
    });
    
    markers.push(marker);
}

// Reset map to original view
function resetMap() {
    map.setCenter(BETTIAH_CENTER);
    map.setZoom(14);
    clearMarkers();
    addCenterMarker();
    addImportantLandmarks();
}

// Clear all markers except the center marker
function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
}

// Search for places by type
function showPlaces(type) {
    clearMarkers();
    
    const request = {
        location: BETTIAH_CENTER,
        radius: 5000, // 5km radius
        type: type
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            results.forEach(place => {
                createMarker(place);
            });
            
            // Fit map bounds to show all markers
            const bounds = new google.maps.LatLngBounds();
            results.forEach(place => {
                bounds.extend(place.geometry.location);
            });
            map.fitBounds(bounds);
        } else {
            alert(`No ${type.replace('_', ' ')}s found in Bettiah area.`);
        }
    });
}

// Create marker for a place
function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', () => {
        const content = `
            <div class="info-window">
                <h3>${place.name}</h3>
                <p><strong>Address:</strong> ${place.vicinity || 'N/A'}</p>
                <p><strong>Rating:</strong> ${place.rating ? place.rating + ' ⭐' : 'No rating'}</p>
                ${place.opening_hours ? 
                    `<p><strong>Status:</strong> ${place.opening_hours.open_now ? 'Open' : 'Closed'}</p>` : ''}
            </div>
        `;
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
    });

    markers.push(marker);
}

// Add important landmarks manually
function addImportantLandmarks() {
    const landmarks = [
        {
            position: { lat: 26.8022, lng: 84.5025 },
            title: 'Bettiah City Center',
            description: 'City center area'
        }
    ];

    landmarks.forEach(landmark => {
        const marker = new google.maps.Marker({
            position: landmark.position,
            map: map,
            title: landmark.title,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            }
        });

        marker.addListener('click', () => {
            infoWindow.setContent(`
                <div class="info-window">
                    <h3>${landmark.title}</h3>
                    <p>${landmark.description}</p>
                </div>
            `);
            infoWindow.open(map, marker);
        });
        
        markers.push(marker);
    });
}

// Initialize map when Google Maps API is loaded
window.initMap = initMap;
