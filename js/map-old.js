let data = [
  {
    title: "João Pessoa",
    lat: -7.1195,
    long: -34.845,
  },
  {
    title: "Lucena",
    lat: -6.9153,
    long: -34.8639,
  },
  {
    title: "Salvador",
    lat: -12.9714,
    long: -38.5014,
  },
  {
    title: "Feira de Santana",
    lat: -12.2667,
    long: -38.9667,
  },
  {
    title: "Mucugê",
    lat: -13.0019,
    long: -41.3703,
  },
  {
    title: "Olivença",
    lat: -15.2486,
    long: -39.1239,
  },
  {
    title: "Caeté-Açu",
    lat: -12.6145,
    long: -38.3937,
  },
  {
    title: "Boipeba",
    lat: -13.51,
    long: -38.9593,
  },
];

const map = L.map("map");

let myMarkers = L.featureGroup();

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

data.forEach(function (item) {
  //create marker
  let marker = L.marker([item.lat, item.long]).bindPopup(item.title);

  // add marker to a feature group
  myMarkers.addLayer(marker);

  $(".sidebar").append('<div class="sidebar-item">' + item.title + "</div>");
});

myMarkers.addTo(map);

map.fitBounds(myMarkers.getBounds());
