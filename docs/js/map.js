'use strict';

let map;

navigator.geolocation.getCurrentPosition(success, error); // Recebe localização do navegador

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    searchPharmacies(latitude, longitude); // Busca Inicial
    const btnCep = document.getElementById('cep-search-btn');
    btnCep.addEventListener("click", () => { //Busca por CEP
        const cep = document.getElementById('cep-search');
        if (cep.value) {
                postcodeToCoord(cep.value).then(r => {
                    searchPharmacies(r.latitude, r.longitude);
                }).catch(error => console.error('Error fetching data:', error));
        } else {
            alert("Adicione um CEP valido");
        }
    });

}

function error() {
    console.log('Não foi possível identificar sua localização');
}

function postcodeToCoord(postcode) {
    const country = "BR";
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&country=${encodeURIComponent(country)}&postalcode=${encodeURIComponent(postcode)}`;

    return fetch(nominatimUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const location = data[0];
                return { latitude: location.lat, longitude: location.lon };
            } else {
                throw new Error("Postcode not found");
            }
        });
}

function searchPharmacies(latitude, longitude) {
    const radius = 20000; // radius in meters
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="pharmacy"](around:${radius},${latitude},${longitude});out;`;
    fetch(overpassUrl)
        .then(response => response.json())
        .then(data => {
            const pharmacies = data.elements;
            updateMap(latitude, longitude, pharmacies);
        })
        .then(() => {
            let loading = document.querySelector('#loading');
            loading.style.display = 'none';
        })
        .catch(error => console.error('Error fetching data:', error));
}

function updateMap(latitude, longitude, pharmacies) {
    // If map already exists, update it
    if (!map) {
        // Initialize the map if it doesn't exist
        map = L.map('map', {
            center: [latitude, longitude],
            zoom: 13,
            minZoom: 10,
            maxZoom: 14
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    } else {
        map.setView([latitude, longitude], 14);
    }

    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    L.marker([latitude, longitude]).addTo(map).bindPopup('You are here').openPopup();

    pharmacies.forEach(pharmacy => {
        const popupContent = `
            <div>
                <strong>${pharmacy.tags.name || 'Unnamed Pharmacy'}</strong><br>
                ${pharmacy.tags['addr:housenumber'] || ''} ${pharmacy.tags['addr:street'] || ''}<br>
                ${pharmacy.tags['addr:postcode'] || ''}
            </div>`;
        L.marker([pharmacy.lat, pharmacy.lon])
            .addTo(map)
            .bindPopup(popupContent);
    });
}
