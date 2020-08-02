

var options = {
  series: [{
    name: undefined,
    data: [64, 40, 28, 21, 20] 
  }],
  chart: {
    fontFamily: 'ministry, sans-serif',
    type: 'bar',
    height: 380,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: 'bottom'
      },

    }
  },
  colors: ['#3c8323','#51ae32','#66da41', '#75e154', '#91e877', '#b1efa2', '#d7f7d0'
  ],
  dataLabels: {

    enabled: true,
    textAnchor: 'start',
    style: {
      fontSize: '12px',

      colors: ['#fff']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + "%"
    },
    offsetX: 0,
    dropShadow: {
      enabled: true
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['Play outside less than once per week', "Don't know where milk comes from", "Haven't been on a country walk in a year", "Haven't been on a farm", "Haven't climbed a tree"
    ],
    max: 70,
    tickAmount: 7,
    labels: {
      show: true,
      formatter: function (value) {
        return value + "%";
      }
    },
    title: {
      text: undefined,
      offsetX: 0,
      offsetY: 0,
      style: {
        color: undefined,
        fontSize: '11px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-title',
      },
    },
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  title: {
    text: 'How many kids..',
    align: 'left',
    floating: true
  },
  subtitle: {
  },
  tooltip: {
    shared: true,
    enabled: false,
    x: {
      show: false    
    },
    y: {
      formatter: (value) => { return value + "%" },
    },
    marker: {
      show: true,
    },
  },
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.15,
      }
    },
    active: {
      filter: {
        type: 'darken', /* none, lighten, darken */
        value: 0.85,
      }
    },
  },
  legend: {
    show: false
  }

};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
