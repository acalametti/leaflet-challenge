# leaflet-challenge

Contributor: Alex Calametti

## Overview

This project utilizes Leaflet and D3.js to create an interactive map visualizing earthquake data from the USGS (United States Geological Survey). It displays earthquake locations and provides information such as magnitude, depth, location, and time.

## Dependencies

Make sure to include the necessary dependencies:

- [Leaflet](https://leafletjs.com/)
- [D3.js](https://d3js.org/)


## Leaflet Map Setup

The script initializes a Leaflet map with the OpenStreetMap tile layer. The map is set to center around latitude 0 and longitude -40.

```javascript
var map = L.map('map').setView([0, -40], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
```

## USGS Data Import

The script used D3.js to fetch earthquake data from the USGS GeoJSON feed for the week prior to when map was created.

```javascript
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson').then(data => {
    // Script logic for processing and visualizing earthquake data
    // ...
});
```

## Earthquake Visualization

The earthquake data was visualized on the Leaflet map using the GeoJSON. Each earthquake wasrepresented by a circle marker, and the marker size is dependent on the earthquake's magnitude. The color of the marker is determined by the depth of the earthquake.

```javascript
L.geoJSON(data, {
    pointToLayer: function(geoJsonPoint, latlng) {
        return L.circleMarker(latlng);
    },
    style: function (feature) {
        // Script logic for styling markers based on magnitude and depth
        // ...
    },
    onEachFeature: function (feature, layer) {
        // Script logic for adding pop-up information
        // ...
    }
}).addTo(map);
```

The pop-up for each earthquake provides users with details such as location, time of occurence, and the magnitude.

This was what the final map looked like: 

![Screen Shot 2023-11-26 at 6 13 34 PM](https://github.com/acalametti/leaflet-challenge/assets/136642574/118d821f-d0bc-4feb-aa1e-79e5e6e38f1b)


## Thanks

Big thank you to my tutor Geronimo Perez for helping me get my map set up! 

## Useful Links 

- USGS Data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

- Leaflet Documentation used: https://leafletjs.com/reference.html
