// Moves map display to over Chicago
function mapChicago(map){
    map.setCetner({lat:41.8781,lng:-87.6298});
    map.setZoom(11);
}

// Add map markers
const coords = [
    {lat:41.880650,lng:-87.675140},
    {lat:42.049450,lng:-87.678130}
];

coords.forEach((el)=> {
    map.addObject(new H.map.Marker({lat:el[0], lng: el[1]}));
});

// Initializes communication with Here platform
const platform = new H.service.Platform({
    apikey: sVjyzBChEiAfsuocCCe_CA
});
const defaultLayers = platform.createDefaultLayers();

// Initializes the map
const map = new H.Map(document.getElementById('map'),
    dafaultLayers.vector.normal.map,{
        center: {lat:41.8781,lng:-87.6298},
        zoom: 11,
        pixelRatio: window.devicePixelRatio || 1
    });

// Make map fill the container
window.addEventListener('resize', () => map.getViewPort().resize());

// Enable map interacvivity
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create defaul map UI components
const ui = H.ui.UI.createDefault(map, defaultLayers);

// Require the map
window.onload = function () {
    mapChicago(map);
}
