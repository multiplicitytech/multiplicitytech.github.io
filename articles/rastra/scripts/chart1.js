var options = {
  series: [{
    name: undefined,
    data: [64, 40, 28, 21, 20] 
  }],
  chart: {
    fontFamily: 'ministry, sans-serif',
    fontSize:'1.2rem',
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
  colors: ['#75e154', '#91e877', '#b1efa2', '#d7f7d0','#e7f7e3'
  ],
  dataLabels: {

    enabled: true,
    textAnchor: 'start',
    style: {
      fontSize: '14px',

      colors: ['black']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex]
    },
    offsetX: 0,
    dropShadow: {
      enabled: false
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['Play outside less than once per week', "Do not know where milk comes from", "Have not been on a country walk in a year", "Have never been on a farm", "Have never climbed a tree"
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
  // title: {
  //   text: 'How much do children engage with nature?',
  //   align: 'left',
  //   floating: true,
  //   style: {
  //     fontSize: '16px',
  //     color:  'black'
  //   }  
  // },
  subtitle: {
  },
  tooltip: {
    shared: true,
    enabled: true,
    x: {
      show: false    
    },
    y: {
      show: true,
      formatter: (value, opt) => {return opt.w.globals.stackedSeriesTotals[opt.dataPointIndex] + "%"},

      title: {
        formatter: (value, opt) => {return ""},
      }
    },
    marker: {
      show: true,
    },
  },
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.01,
      }
    },
    active: {
      filter: {
        type: 'darken', /* none, lighten, darken */
        value: 0.99,
      }
    },
  },
  legend: {
    show: false
  }

};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();


