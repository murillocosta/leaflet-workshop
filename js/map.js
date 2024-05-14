var map = L.map("map").setView([-12.9714, -38.5014], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-12.9714, -38.5014]).addTo(map).bindPopup("Salvador");
