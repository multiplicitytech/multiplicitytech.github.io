var points = [
   ["Panama", "Appetito24", 8.966666667, -79.533333],
   ["Bolivia","PedidosYa", -16.5, -68.15],
   ["Paraguay","PedidosYa",-25.26666667,-57.666667 ],
   ["Argentina","PedidosYa",-34.58333333	 , -58.666667],
   ["Chile","PedidosYa",-33.45 ,-70.666667 ],
   ["Uruguay","PedidosYa",-34.85 ,-56.166667  ],
   ["Norway","Foodora",59.91666667	, 	10.75],
   ["Austria","Mjam",48.2, 16.366667],
   ["Romania","foodpanda",44.43333333, 26.1],
   ["Bulgaria","foodpanda",42.68333333, 23.316667	],
   ["Finland","Foodora", 60.16666667	, 24.933333	],
   ["Thailand","foodpanda", 13.75, 100.516667],
   ["Hong Kong","foodpanda", 22.3193, 114.1694],
   ["Taiwan","foodpanda", 25.03333333,121.516667],
   ["Malaysia", "foodpanda",3.166666667,101.7],
   ["Philipines","foodpanda",	14.6 , 120.966667],
   ["Greece","efood" ,37.98333333 ,23.733333], 
   ["Qatar", "Talabat",25.28333333,51.533333 ], 
   ["Bahrain","Talabat",26.23333333,50.566667 ], 
   ["Bangladesh","foodpanda", 23.71666667, 90.4], 
   ["Saudi Arabia","Talabat", 24.65, 46.7], 
   ["Jordan","Talabat" ,	31.95 ,	35.933333],
   ["Serbia","Donesi",44.83333333 ,	20.5 ],
   ["Bosnia and Herzegona","Donesi", 43.86666667	, 18.416667], 
   ["Kuwait","Talabat", 29.36666667,47.966667 ], 
   ["Singapore","foodpanda", 1.283333333,103.85 ], 
   ["Laos","foodpanda", 17.96666667,102.6], 
   ["South Korea","Yogiyo" , 	37.55, 126.983333], 
   ["Cambodia","foodpanda", 	11.55, 104.916667], 
   ["Sweden","Foodora",59.33333333 ,18.05 ], 
   ["Chile","PedidosYa",-33.45 , -70.666667	], 
   ["Montenegro","Donesi", 42.43333333,19.266667], 
   ["Colombia","Domicilios.com",4.6 ,-74.083333],
   ["Myanmar","foodpanda", 	16.8, 	96.15],
   ["Croatia","Pauza",	45.8 ,	16],
   ["Turkey","Yemeksepeti", 	39.93333333, 32.866667],
   ["Cyprus", "Foody", 35.16666667, 33.366667], 
   ["Oman","Talabat",23.61666667 ,58.583333],
   ["UAE","Talabat",24.46666667 , 54.366667], 
   ["Czech Republic", "DameJidlo", 50.08333333	, 14.466667], 
   ["Pakistan","foodpanda" , 33.68333333, 73.05], 
   ["Dominican Republic","PedidosYa" ,	18.46666667 , 	-69.9], 
   ["Egypt", "Otlob",	30.05 ,	31.25],
   ];

//create map object and set default positions and zoom level
var map = L.map('map').setView([23, 15], 1.5);

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

for (var i = 0; i < 44; i++) {
       L.marker([points[i][2], points[i][3]], {icon: Icon}).bindTooltip('<p class="maptiptext"><b>'+ points[i][0]+ '</b></p> <p class="maptiptext">' + points[i][1] +'</p>', {className: 'maptip'}).addTo(map);
   }
