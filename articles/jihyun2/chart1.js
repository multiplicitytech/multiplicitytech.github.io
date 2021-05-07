var options = {
  series: [{
  name: '2015',
  data: [1, 3, 11, 3, 11, 2, 8, 28]
}, {
  name: '2050, in 2015 dollars',
  data: [9, 13, 119, 85, 26, 6, 33, 137]
}],
chart: {
  background: '#fff',
  type: 'bar',
  height: 370,
  toolbar: {
    show: false
  },      
  zoom: {
    enabled: false
  }
},
colors: ['#10dd00', '#000'],
title: {
  text: 'Total retirement savings gap by country (trillions of dollars)',
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '80%',
    dataLabels: {
      position: 'top',
    },
  }
},
dataLabels: {
  enabled: true,
  offsetX: 0,
  offsetY: -17,
  style: {
    colors: ['#000']
  },
  formatter: function (val) {
    return "$" + val + "T";
  }
},
stroke: {
  show: true,
  width: 1,
  colors: ['#fff']
},
tooltip: {
  shared: true,
  intersect: false
},
xaxis: {
  categories: ['Australia', 'Canada', 'China', 'India', 'Japan', 'Netherlands', 'U.K.', 'U.S.'],
},
yaxis: {
  labels: {
    show: true,
    formatter: function (val) {
      return "$" + val + "T";
    }
  },  
},
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();