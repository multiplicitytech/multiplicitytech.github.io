var options = {
  series: [
  {
    name: "Upper income",
    data: [29, 48]
  },
  {
    name: "Middle income",
    data: [62, 43]
  },
  {
    name: "Lower income",
    data: [10, 9]
  }
  ],
  chart: {
    height: 350,
    background: '#fff',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    }
  },
  title: {
    text: 'Rising wealth inequality in the US',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['1970', '2018'],
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
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -15,
    offsetX: -5
  }
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();