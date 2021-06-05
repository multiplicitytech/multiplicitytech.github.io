var options = {
  series: [{
  name: '2015',
  data: [11, 3, 11, 8, 28]
}, {
  name: '2050, in 2015 dollars',
  data: [119, 85, 26, 33, 137]
}],
chart: {
  background: '#fff',
  type: 'bar',
  height: 330,
  toolbar: {
    show: false
  },      
  zoom: {
    enabled: false
  }
},
colors: ['#10dd00', '#000'],
title: {
  text: 'Total retirement savings gap by country (in USD)',
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '70%',
    dataLabels: {
      position: 'top',
    },
  }
},
dataLabels: {
  enabled: true,
  offsetX: 0,
  offsetY: -20,
  style: {
    colors: ['#000']
  },
  formatter: function (val) {
    return val + "T";
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
  categories: ['China', 'India', 'Japan', 'U.K.', 'U.S.'],
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

var chart = new ApexCharts(document.querySelector("#chart1mobile"), options);
chart.render();