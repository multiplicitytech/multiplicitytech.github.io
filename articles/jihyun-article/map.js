var points = [
   ["Canada",60, -95],
   ["Panama", 9, -80],
   ["Bolivia",-17, -65],
   ["Paraguay",-23, -58],
   ["Argentina", -34, -64],
   ["Chile", -30, -71],
   ["Uruguay", -33, -56 ],
   ["Norway",62,10 ],
   ["Germany",51,9 ],
   ["Italy",42.83333333, 12.83333333],
   ["Austria",47.33333333, 13.33333333],
   ["Romania",46,25 ],
   ["Bulgaria",43,25 ],
   ["Finland", 64, 26],
   ["Pakistan", 30,70 ],
   ["India", 20,70 ],
   ["Thailand",15 ,100 ],
   ["Hong Kong", 22.267, 114.188 ],
   ["Taiwan",23.5 ,121 ],
   ["Malaysia", 2.5,112.5],
   ["Philipines", 13, 122],
   ];

//create map object and set default positions and zoom level
var map = L.map('map').setView([20, 8], 2);

map.scrollWheelZoom.disable();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

 
 
 var Icon = L.icon({
   iconUrl: 'map.svg',
   //shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',

   iconSize:     [20, 20], // size of the icon
   //shadowSize:   [50, 64], // size of the shadow
   iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
   //shadowAnchor: [4, 62],  // the same for the shadow
   popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});

for (var i = 0; i < points.length; i++) {
       L.marker([points[i][1], points[i][2]], {icon: Icon}).bindPopup(points[i][0]).addTo(map);
   }