var bounded3 = false;
var pastLocation3;
var geojson3;

var countryQuotes = {
	"Bosnia and Herzegovina": [' " People probably do not even care about such things [digital privacy], they have bigger problems. They are not noticeably affected by the data mining. Digital privacy is a first world problem where everything works online, but people in Bosnia are reluctant to buy things online. And then it comes to issues on digital privacy the public is ignorant and inexperienced. I don’t think people would care even if they knew more about the issue. The ignorance they have comes from them not taking the whole topic seriously enough to care.  Maybe in 20 years people will start caring, when the other worries fade away (economic and social). " '],
	"Serbia": [' " The only time digital privacy makes the news is with political wiretapping when it is a political issue and not about digital privacy or ethics. In general, there is a lot of information sharing, and people do not care about it being protected because the laws are non-existent and if they were realized there is a lack of faith in the judiciary. Everybody is oversharing online, and we normalized it as we know no better. " '],
	"Kosovo": ['abc','def','ghi'],
	"Macedonia": [' " If something like a digital breach happened to me, I would not reach out to the government, they are inefficient, they do not protect basic rights much less something heavier or more technical. I think when it comes to communism and attitudes, older people have their distrust linked to communism because they think the previous communist government was better and this one disappoints. Corruption in the justice system makes it even less possible to do anything about possible data breaches. " '],
	"Bulgaria": [' " Social media and Google are collecting all of our data and probably the Bulgarian government is as well. " ',' " There are no legal mechanisms of implementation or regulation of digital privacy in Bulgaria, and even if the laws exist no one would use them because no one trusts the justice system here. " ',' " We had a scandal when the government was hacked and immediately politicians used the news around GDPR to hide the coverage of the scandal.The average Bulgarian probably does not care or think about digital privacy. " '],
	"Romania": [' " There were scandals where politicians used online information for blackmail, but the scandals were more political than a digital privacy issue. The news media is very politically controlled and directed towards certain agendas. We had a case a few years ago when our minister of education was being blackmailed by political opponents because of his modelling past. " ',' " I never heard of any laws or discussions surrounding digital privacy regulation or data protection in Romania. I doubt there are any if this happened to someone as powerful as a minister and nothing was done. " '],
	"Poland": ['abc','def','ghi'],
	"Lithuania": [' " I do not trust the government with a lot of things based on my previous experiences and especially not with data privacy. My country is known for changing the implementation of EU laws because they are seen as imposed from Brussels. I once wanted to have my student’s insurance as guaranteed by EU law but Lithuania, a member of the EU, decided not to issue my insurance stating “that they do things differently. " ',' " I honestly have no clue who to reach out if my data was violated, would probably reach out to the company, would definitely not reach out to the government. Lithuania is corrupt with a lot of our political parties having members from communist bureaucracy. A lot of the Lithuanian government is previous communists, so the corrupt mindset remains. It would make sense people kept the surveillance mentality as well. " '],
	"Ukraine": [' " I would never trust the government to deal with these kinds of issues surrounding digital privacy, as the government is corrupt and has no interest in stopping something that is profiting them. During the revolution there was a heavy online crackdown on critics as it was the starting point of the revolution. " ',' " The Russian government is collecting a lot more data than the Ukranian one. I once travelled to Russia and I saw that they had a detailed record at the border patrol of my online activity. They were using it to make a decision on whether I should be allowed to enter or not. " ']
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
'rgb(236, 92, 101)', 
'rgb(118, 225, 84)', 
'rgb(124, 252, 218)', 
'rgb(245, 184, 80)', 
'rgb(226, 73, 247)', 
'rgb(51, 55, 245)', 
'rgb(240, 254, 96)',
'rgb(154, 154, 248)',
'rgb(243, 171, 176)'
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
		// changeColor();
		var layer3 = e.target;


		for (var country in countryQuotes) {
			shuffle(countryQuotes[country]);
		}
		layer3.bindTooltip(countryQuotes[layer3.feature.properties.name_long][0]);

		layer3.setStyle({
			weight: 4,
			color: 'rgb(214, 254, 245)',
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

var counter = 0;
// window.setInterval(function(){
	counter++;

function changeColor(){
	if (counter>9) {
		counter = 0;
	}

	if (counter == 0) {
		shuffle(map3colors);
	}

	geojson3.eachLayer(function (layer) {  
		// switch (layer.feature.properties.name_long) {
		// 	case "Bosnia and Herzegovina":
		// 	layer.setStyle({fillColor :map3colors[0]});
		// 	break;
		// 	case "Serbia":
		// 	layer.setStyle({fillColor :map3colors[1]});

		// 	break;
		// 	case "Kosovo":
		// 	layer.setStyle({fillColor :map3colors[2]});

		// 	break;
		// 	case "Macedonia":
		// 	layer.setStyle({fillColor :map3colors[3]});

		// 	break;
		// 	case "Bulgaria":
		// 	layer.setStyle({fillColor :map3colors[4]});

		// 	break;
		// 	case "Romania":
		// 	layer.setStyle({fillColor :map3colors[5]});

		// 	break;
		// 	case "Poland":
		// 	layer.setStyle({fillColor :map3colors[6]});

		// 	break;
		// 	case "Lithuania":
		// 	layer.setStyle({fillColor :map3colors[7]});

		// 	break;
		// 	case "Ukraine":
		// 	layer.setStyle({fillColor :map3colors[8]});

		// 	break;			
		// }
		switch (counter) {
			case 0:
			if (layer.feature.properties.name_long == "Bosnia and Herzegovina")
				layer.setStyle({fillColor :map3colors[0]});
			break;
			case 1:
			if (layer.feature.properties.name_long == "Serbia")

				layer.setStyle({fillColor :map3colors[1]});

			break;
			case 2:
			if (layer.feature.properties.name_long == "Kosovo")

				layer.setStyle({fillColor :map3colors[2]});

			break;
			case 3:
			if (layer.feature.properties.name_long == "Macedonia")

				layer.setStyle({fillColor :map3colors[3]});

			break;
			case 4:
			if (layer.feature.properties.name_long == "Bulgaria")

				layer.setStyle({fillColor :map3colors[4]});

			break;
			case 5:
			if (layer.feature.properties.name_long == "Romania")

				layer.setStyle({fillColor :map3colors[5]});

			break;
			case 6:
			if (layer.feature.properties.name_long == "Poland")

				layer.setStyle({fillColor :map3colors[6]});

			break;
			case 7:
			if (layer.feature.properties.name_long == "Lithuania")

				layer.setStyle({fillColor :map3colors[7]});

			break;
			case 8:
			if (layer.feature.properties.name_long == "Ukraine")

				layer.setStyle({fillColor :map3colors[8]});

			break;			
		}

	});
}



geojson3 = L.geoJson(interview_countries, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map3);




info3.addTo(map3);