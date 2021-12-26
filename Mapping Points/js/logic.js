// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([40.7, -94.5], 4); 

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// add a marker
var cities1  = L.marker([40.7128, -74.0059],{
    draggable: true,
    title: "New York City"
}).addTo(map);

var cities2  = L.marker([41.8781, -87.6298],{
    draggable: true,
    title: "Chicago"
}).addTo(map);

var cities3  = L.marker([29.7604, -95.3698],{
    draggable: true,
    title: "Houston"
}).addTo(map);

var cities4  = L.marker([34.0522, -118.2437],{
    draggable: true,
    title: "Los Angeles"
}).addTo(map);

var cities4  = L.marker([33.4484, -112.0740],{
    draggable: true,
    title: "Phoenix"
}).addTo(map);

// An array containing each city's location, state, and population.
// Get data from cities.js
// let cityData = cities;


// Loop through the cities array and create one marker for each city.
// //cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
