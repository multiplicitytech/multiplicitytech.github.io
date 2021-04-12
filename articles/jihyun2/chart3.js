var options = {
    series: [{
      name: "Percentage of global stocks (holding for one year)",
      data: [33, 78, 60, 51, 30, 21, 50, 40, 52, 42, 41, 23]
  }],
    chart: {
      height: 350,
      background: '#fff',
      type: 'line',
      toolbar: {
        show: false
      },      
      zoom: {
        enabled: false
      }
  },
  colors: ['#FF0000'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Percentage of global stocks outperforming the S&P 500',
    align: 'left'
  },
  annotations: {
    yaxis: [{
      strokeDashArray: 0,
      y: 50,
      borderColor: '#000',
      label: {
        text: '50%',        
      }

    }],
    xaxis: [{
      x: 0,
      x2: null,
    }],
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Dec - 08', 'Dec - 09', 'Dec - 10', 'Dec - 11', 'Dec - 12', 'Dec - 13', 'Dec - 14', 'Dec - 15', 'Dec - 16', 'Dec - 17', 'Dec - 18', 'Dec - 19'],
  },
  yaxis: {
    min: 0,
    max: 100,
    labels: {
      show: true,
      offsetX: -10,
      formatter: function (val) {
        return val + "%";
      }
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

