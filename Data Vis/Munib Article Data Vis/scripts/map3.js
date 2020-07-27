var bounded3 = false;
var pastLocation3;
var geojson3;

var countryQuotes = {
	"Bosnia and Herzegovina": ['boz1','boz2','boz3'],
	"Serbia": ['ser1','ser2','ser3'],
	"Kosovo": ['abc','def','ghi'],
	"Macedonia": ['abc','def','ghi'],
	"Bulgaria": ['abc','def','ghi'],
	"Romania": ['abc','def','ghi'],
	"Poland": ['abc','def','ghi'],
	"Lithuania": ['abc','def','ghi'],
	"Ukraine": ['abc','def','ghi']
};

const map3 = L.map('map3').setView([49, 27], 5); //europe

const attribution3 = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const tiles3 = L.tileLayer(tileURL, {
	id: 'mapbox/light-v9',
	attribution: attribution3,
	tileSize: 512,
	zoomOffset: -1
});
tiles3.addTo(map3);


//randomize colors so each time the colors are different
var map3colors = [
'rgb(235, 62, 66)', 
'rgb(102, 218, 65)', 
'rgb(116, 251, 209)', 
'rgb(243, 167, 59)', 
'rgb(222, 51, 247)', 
'rgb(0, 14, 245)', 
'rgb(189, 203, 65)',
'rgb(236, 254, 83)',
'rgb(104, 104, 246)'
];


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}
return array;
}
function getColor3(d) {
	 // see where i have to put these exactly (shuffle colors and quotes at the same time)
	 return d == "Bosnia and Herzegovina" ? map3colors[0] :
	 d == "Serbia" ? map3colors[1] :
	 d == "Kosovo" ? map3colors[2] :
	 d == "Macedonia" ? map3colors[3] :
	 d == "Bulgaria" ? map3colors[4] :
	 d == "Romania" ? map3colors[5] :
	 d == "Poland" ? map3colors[6] :
	 d == "Lithuania" ? map3colors[7] :
	 d == "Ukraine" ? map3colors[8]:
	 '#eb3e41';
	}

	function style(feature) {
		return {
			fillColor: getColor3(feature.properties.name_long),
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7
		};
	}

	function highlightFeature(e) {
		var layer3 = e.target;


		for (var country in countryQuotes) {
			shuffle(countryQuotes[country]);
		}
		layer3.bindTooltip(countryQuotes[layer3.feature.properties.name_long][0]);

		layer3.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer3.bringToFront();
		}
		info3.update(layer3.feature.properties);


	}

	function resetHighlight(e) {
		geojson3.resetStyle(e.target);
		info3.update();

	}

	function zoomToFeature3(e) {
		if (bounded3 && pastLocation3 == e.target._bounds) {
			map3.setView([49, 27], 5);
			bounded3 = false;
		} else {
			map3.fitBounds(e.target.getBounds());

			bounded3 = true;
			pastLocation3 = e.target._bounds;
		}
	}

	function getRandomNumber(feature) {
		return [feature.properties.name_long][0];
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature3
		});
		layer.bindTooltip(countryQuotes[layer.feature.properties.name_long][0]);
	}

// Custom Info Control
var info3 = L.control({
    //position: 'bottomright'
});

info3.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;

};

// method that we will use to update the control based on feature properties passed
info3.update = function(props) {
	this._div.innerHTML = '<h4>Nationalities interviewed throughout the investigation</h4>' + (props ?
		'<b>' + props.name_long :
		'Hover over a country');
};


window.setInterval(function(){
	shuffle(map3colors);

	geojson3.eachLayer(function (layer) {  
		switch (layer.feature.properties.name_long) {
			case "Bosnia and Herzegovina":
			layer.setStyle({fillColor :map3colors[0]});
			break;
			case "Serbia":
			layer.setStyle({fillColor :map3colors[1]});

			break;
			case "Kosovo":
			layer.setStyle({fillColor :map3colors[2]});

			break;
			case "Macedonia":
			layer.setStyle({fillColor :map3colors[3]});

			break;
			case "Bulgaria":
			layer.setStyle({fillColor :map3colors[4]});

			break;
			case "Romania":
			layer.setStyle({fillColor :map3colors[5]});

			break;
			case "Poland":
			layer.setStyle({fillColor :map3colors[6]});

			break;
			case "Lithuania":
			layer.setStyle({fillColor :map3colors[7]});

			break;
			case "Ukraine":
			layer.setStyle({fillColor :map3colors[8]});

			break;			
		}

	});


}, 1000);




geojson3 = L.geoJson(interview_countries, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map3);




info3.addTo(map3);