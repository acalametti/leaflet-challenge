var map = L.map('map').setView([0, -40], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson').then(data => {
    console.log(data.features[100]);

    L.geoJSON(data, {
        pointToLayer: function(geoJsonPoint, latlng) {
            return L.circleMarker(latlng);
        },
        style: function (feature) {
            let mag = feature.properties.mag;
            let depth = feature.geometry.coordinates[2];

            return {
                color: 'black',
                weight:1,
                fillColor: 
                    depth < 10 ? 'green' :
                    depth < 30 ? 'lime' :
                    depth < 50 ? 'yellow' :
                    depth < 70 ? 'orange' :
                    depth < 90 ? 'darkorange' : 'red',
                    fillOpacity: .75,
                radius: mag * 4
                };
        }
    }).bindPopup(function ({feature}) {
        let place = feature.properties.place;
        let time = new Date(feature.properties.time).toLocaleString();
        let mag = feature.properties.mag;

        return `<h3>${place} <br>${time}<br> Magnitude:${mag} </h3>`
    }).addTo(map);
})