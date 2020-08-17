var companies = {
    "Panama":['Appetito24'] ,
   "Bolivia":['PedidosYa'] ,
   "Paraguay":['PedidosYa'] ,
   "Argentina":['PedidosYa'] ,
   "Chile":['PedidosYa'] ,
   "Uruguay":['PedidosYa'] ,
   "Norway":['Foodora'] ,
   "Austria":[ 'Mjam'],
   "Romania" :['foodpanda'] ,
   "Bulgaria":['foodpanda'] ,
   "Finland":['Foodora'] , 
   "Thailand":['foodpanda'], 
   "Hong Kong":['foodpanda'] , 
   "Taiwan":['foodpanda'] , 
   "Malaysia":['foodpanda'] ,
   "Philippines":['foodpanda'] ,
   "Greece":['efood']  ,
   "Qatar":['Talabat'] ,
   "Bahrain":['Talabat'] , 
   "Bangladesh":['foodpanda'] , 
   "Saudi Arabia":['Talabat'] , 
   "Jordan":['Talabat']  ,	
   "Serbia":['Donesi'],
   "Bosnia and Herzegovina":['Donesi'] , 
   "Kuwait":['Talabat'] , 
   "China":['foodpanda'] ,
   "Lao PDR":['foodpanda'] , 
   "Republic of Korea":[ 'Yogiyo'] , 
   "Cambodia":['foodpanda'] , 
   "Sweden":['Foodora'] ,
   "Chile":['PedidosYa'] ,
   "Montenegro":['Donesi'] , 
   "Colombia":['Domicilios.com'] ,
   "Myanmar":['foodpanda'] ,
   "Croatia":['Pauza'] ,
   "Turkey":['Yemeksepeti'] ,
   "Cyprus":['Foody']  , 
   "Oman":['Talabat'] ,
   "United Arab Emirates":['Talabat'] ,
   "Czech Republic":['DameJidlo']  , 
   "Pakistan":['foodpanda']  , 
   "Dominican Republic":['PedidosYa']  , 
   "Egypt":['Otlob'] 
};


var bounded = false;
var pastLocation;
var geojson;
var layerSelect = '';
const mapboxAccessToken = 'pk.eyJ1Ijoic29oYWlsYmFnaGVyaSIsImEiOiJja2N0Mno0NGgwYWN0MnJudG1qcDFmZXlsIn0.Slzmp4JvAnT08GrpHiBDWg';
		const tileURL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken;

const map = L.map('map').setView([23, 15], 1.5); //world

map.scrollWheelZoom.disable();


const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const tiles = L.tileLayer(tileURL, {
    id: 'mapbox/light-v9',
    attribution: attribution,
    tileSize: 512,
    zoomOffset: -1
});

tiles.addTo(map);


function style(feature) {
   return {
       fillColor: '#c51928',
       weight: 1,
       opacity: 1,
       color: 'white',
       dashArray: '3',
       fillOpacity: 0.5
   };
}



function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: '#ffa300',
        fillColor: '#c51928',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: highlightFeature
    });
}
geojson = L.geoJson(lujain_data, {
    style: style,
    onEachFeature: onEachFeature
 }).addTo(map);

 var info = L.control();

 info.onAdd = function (map) {
     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
     this.update();
     return this._div;
 };
 
 // method that we will use to update the control based on feature properties passed
 info.update = function (props) {
     this._div.innerHTML = '<h4>Delivery Hero Companies</h4>' +  (props ?
         '<p style="color: #ffa300;">' + props.name_long + '</p><b>' + companies[props.name_long]+'</b><br>'+ ' '
         : 'Hover over a country');
 };
 
 info.addTo(map);
