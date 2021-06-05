var options = {
    series: [{
    name: 'Options',
    data: [59.8, 0, 0]
  }, {
    name: 'Non-S&P 500',
    data: [27.3, 0, 0]
  }, {
    name: 'S&P 500',
    data: [3.9, 0, 0]
  }, {
    name: 'Non-Marketable Limit Orders',
    data: [0, 46.0, 0]
  }, {
    name: 'Marketable Limit Orders',
    data: [0, 30.6, 0]
  }, {
    name: 'Market Orders',
    data: [0, 8.3, 0]
  }, {
    name: 'Other Order Types',
    data: [0, 6.0, 0]
  }, {
    name: 'Citadel Securities',
    data: [0, 0, 39.5]
  }, {
    name: 'G1 Execution Services',
    data: [0, 0, 25.5]
  }, {
    name: 'Wolverine Securities',
    data: [0, 0, 17.1]
  }, {
    name: 'Virtu Americas',
    data: [0, 0, 6.7]
  }, {
    name: 'Two Sigma Securities',
    data: [0, 0, 2.2]
  },
  ],
    chart: {
    type: 'bar',
    background: '#fff',
    height: 350,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  colors:['#FFD700', '#98ff8f', '#000', '#10dd00', '#d6ffda'],
  title: {
    text: 'Robinhood revenue breakdowns (in USD millions)',
    align: 'left'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      borderRadius: 8,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return "$" + val;
    }
  },
  xaxis: {
    categories: ['Product Category', 'Order Type', 'Broker Dealer'],
  },
  yaxis: {
    min: 0,
    max: 100,
    labels: {
      show: true,
      formatter: function (val) {
        return "$" + val;
      }
    },
  },
  legend: {
    show: false
  },
  fill: {
    opacity: 1
  }
  };

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();