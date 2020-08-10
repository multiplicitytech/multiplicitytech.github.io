var bounded2 = false;
var pastLocation2;
var geojson2;
var layerSelect = '';


const map2 = L.map('map2').setView([54, 13], 4); //europe

map2.scrollWheelZoom.disable();


const attribution2 = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, Data: <a href="https://ec.europa.eu/commfrontoffice/publicopinion/archives/ebs/ebs_431_en.pdf">European Commission</a>';

const tiles2 = L.tileLayer(tileURL, {
    id: 'mapbox/light-v9',
    attribution: attribution2,
    tileSize: 512,
    zoomOffset: -1
});

tiles2.addTo(map2);


// Custom Info Control
var info2 = L.control({
    position: 'topright'
});

info2.onAdd = function (e) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info2.update = function (properties) {
    this._div.innerHTML = '<h4>To whom would you prefer to send a complaint to about protecting your data?</h4>';
    if (typeof (properties) != 'undefined') {
        if (layerSelect == 'national') {
            this._div.innerHTML += '<b>' +properties.dataProblemToDataProtectionAuthority +'% prefer this option';
        }
        else{
            this._div.innerHTML += '<b>'+ properties.dataProblemToAuthority_PrivateCompany +'% prefer this option';
        }
        // this._div.innerHTML += '<b>' + properties.name_long + '</b><br/>' + 'Private Company Handling Data: ' + properties.dataProblemToAuthority_PrivateCompany + '%<br/>' + 'National Data Protection Authority: ' + properties.dataProblemToDataProtectionAuthority + '%';
    } else {
        this._div.innerHTML += 'Change your selection below & hover over a country';
    }
};

var nationalthresholds = [
[0, 'rgb(245, 253, 244)'],
[40, 'rgb(178, 239,  162)'],
[45, 'rgb(145, 232,  119)'],
[55, 'rgb(81, 174, 50)'],
[65, 'rgb(60, 131, 35)']
];

var privatecompanythresholds = [
[0, 'rgb(241, 255, 251)'],
[40, 'rgb(177, 253, 236)'],
[45, 'rgb(124, 252, 218)'],
[55, 'rgb( 92, 201, 167)'],
[65, 'rgb(  67,  151, 126)']
];


var colorByThresholds = function (thresholds, value) {
    for (var i = 0; i < thresholds.length - 1; i++) {
        if (value < thresholds[i + 1][0])
            return thresholds[i][1];
    }
    return thresholds[thresholds.length - 1][1];
};


// Custom Legend Control
var legend2 = L.control({
    position: 'bottomleft'
});

legend2.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend')

    // loop through our density intervals and generate a label with a colored square for each interval
    values = [0,40,45,55,65,100];

    if (layerSelect == 'national') {

        for (var i = 0; i < nationalthresholds.length; i++) {
            div.innerHTML +=
            '<i style="background:' + colorByThresholds(nationalthresholds, nationalthresholds[i][0]) + '"></i> ' +
            values[i] + (values[i + 1] ? '% &ndash; ' + values[i + 1] + '%<br>' : '');

        }

    }
    else {

        for (var i = 0; i < nationalthresholds.length; i++) {
            div.innerHTML +=
            '<i style="background:' + colorByThresholds(privatecompanythresholds, privatecompanythresholds[i][0]) + '"></i> ' +
            values[i] + (values[i + 1] ? '% &ndash; ' + values[i + 1] + '%<br>' : '');

        }

    }
    return div;    

};



var nationallayer = L.geoJson(europe_data, {
    style: function (feature) {
        var nationalData = feature.properties.dataProblemToDataProtectionAuthority;

        return {
            fillColor: colorByThresholds(nationalthresholds, nationalData),
           fillOpacity: 0.75,
            weight: 1,
            opacity: 1,
            dashArray: '3',

            color: '#666'
        };

    },
    onEachFeature: function (feature, layer) {
        layer.on({
            'mousemove': function (e) {
                e.target.setStyle({
                    weight: 3,
                    color: '#d7f7cf',
                    dashArray: '',
                    fillOpacity: 0.7
                });
                info2.update(feature.properties);
            },
            'mouseout': function (e) {
                nationallayer.resetStyle(e.target);
                info2.update();

            },
            'click': function (e) {

                if (bounded2 && pastLocation2 == e.target._bounds) {
                    map2.setView([51.74739, 10], 4);
                    bounded2 = false;
                } 
                else {
                    switch (e.target.feature.properties.name_long) { // islands far from mainland so need to change bounds
                        case 'France':
                        map2.fitBounds([
                            [51.1, 7.6],
                            [41.5, -4.6]
                            ]);
                        break;

                        case 'Spain':
                        map2.fitBounds([
                            [44.4, 3.9],
                            [35.4, -9.2]
                            ]);
                        break;

                        case 'Netherlands':
                        map2.fitBounds([
                            [53.7, 7.6],
                            [50.7, 3.2]
                            ]);
                        break;

                        case 'Portugal':
                        map2.fitBounds([
                            [42.4, -6.2],
                            [36.4, -9.7]
                            ]);
                        break;

                        default: // if not these special case countries then just go to bounds
                        map2.fitBounds(e.target.getBounds());
                    }
                    bounded2 = true;
                    pastLocation2 = e.target._bounds;
                }            }
            });
    }
});


var companylayer = L.geoJson(europe_data, {

    style: function (feature) {
        var companyData = feature.properties.dataProblemToAuthority_PrivateCompany;

        return {
            fillColor: colorByThresholds(privatecompanythresholds, companyData),
            fillOpacity: 0.75,
            weight: 1,
            opacity: 1,
            dashArray: '3',

            color: '#666'
        };
    },
    onEachFeature: function (feature, layer) {
        layer.on({
            'mousemove': function (e) {
                e.target.setStyle({
                    weight: 3,
                    color: 'rgb(214, 254, 245)',
                    dashArray: '',
                    fillOpacity: 0.7
                });
                info2.update(feature.properties);

            },
            'mouseout': function (e) {
                companylayer.resetStyle(e.target);
                info2.update();

            },
            'click': function (e) {

                if (bounded2 && pastLocation2 == e.target._bounds) {
                    map2.setView([51.74739, 10], 4);
                    bounded2 = false;
                } 
                else {
                    switch (e.target.feature.properties.name_long) { // islands far from mainland so need to change bounds
                        case 'France':
                        map2.fitBounds([
                            [51.1, 7.6],
                            [41.5, -4.6]
                            ]);
                        break;

                        case 'Spain':
                        map2.fitBounds([
                            [44.4, 3.9],
                            [35.4, -9.2]
                            ]);
                        break;

                        case 'Netherlands':
                        map2.fitBounds([
                            [53.7, 7.6],
                            [50.7, 3.2]
                            ]);
                        break;

                        case 'Portugal':
                        map2.fitBounds([
                            [42.4, -6.2],
                            [36.4, -9.7]
                            ]);
                        break;

                        default: // if not these special case countries then just go to bounds
                        map2.fitBounds(e.target.getBounds());
                    }
                    bounded2 = true;
                    pastLocation2 = e.target._bounds;
                }
            }
        });
    }
}).addTo(map2);


var options = {
    "collapsed": false
};


L.control.layers({
    'National Data Protection Authority': nationallayer,
    'Private Company Handling Data': companylayer
},null,{collapsed: false, position: 'bottomright'}).addTo(map2);




// change legend based on layer selected
map2.on('baselayerchange', function(e) {
    legend2.remove();

    if(e.name == 'Private Company Handling Data'){
        layerSelect = 'company';
        legend2.addTo(map2);

    }
    if(e.name == 'National Data Protection Authority') {
        layerSelect = 'national';
        legend2.addTo(map2);

    }

} );


legend2.addTo(map2);
info2.addTo(map2);