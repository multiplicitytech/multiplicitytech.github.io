var options = {
    series: [{
      name: "S&P 500",
      data: [100000, 102098, 118322, 156357, 177504, 179951, 201137, 244594, 234242, 308005, 364678]
    },
    {
      name: "Hedge Funds",
      data: [100000, 94520, 102318, 113696, 116970, 117017, 124143, 137538, 130538, 144466, 159982]
    },
    ],
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
  colors: ['#0000FF', '#FF0000'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Payoff from $100,000 invested on January 1, 2011: S&P 500 index vs. average hedge fund',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  },
  yaxis: {
    labels: {
      show: true,
      offsetX: -10,
      formatter: function (val) {
        return "$" + val;
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

