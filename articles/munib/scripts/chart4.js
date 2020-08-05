var options = {
  title: {
    text: undefined,
    align: 'left',
    margin: 0,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#263238'
    },
  },
  colors: ['#51ae32', '#7cfcda','#ccc'],
  series: [ {
    name: 'Yes',
    // data: [39,36,36,33,33,31,31,29,27,27,27,27,26,26,25,25,24,23,23,23,22,22,21,19,19,18,17,16,14]
    data: [39,33,27,25,24,23,22,19,19,17,16,14]
  },
  {
    name: 'No',
    // data: [48,58,56,55,59,56,61,59,68,65,64,58,65,69,68,66,70,64,68,65,74,64,67,71,71,68,78,77,80]
    data: [48,59,64,66,70,64,64,71,71,78,77,80]
  }, {
    name: "Don't know",
    // data: [13,6,8,12,8,13,8,12,5,8,9,15,9,5,7,9,6,13,9,12,4,14,12,10,10,14,5,7,6]
    data: [13,8,9,9,6,13,14,10,10,5,7,6]
  }],
  chart: {
    offsetY: '0px',
    offsetX: '0px',
    fontFamily: 'ministry, sans-serif',
    type: 'bar',
    height: 600,
    stacked: true,
    toolbar: {
      show: false
    },
    events: {
      scrolled: function(chartContext, { xaxis }) {
        console.log('scroll');
      },
      zoomed: function(chartContext, { xaxis, yaxis }) {
        console.log('zoom');
      }

    },
    animations: {
      enabled: false,
      easing: 'easeinout',
      speed: 2500,
      animateGradually: {
        enabled: false,
        delay: 150
      },
      dynamicAnimation: {
        enabled: false,
        speed: 350
      }
    }
  },
  grid: {
    show: false
  },
  plotOptions: {
    bar: {
      horizontal: false,
      barWidth: '100%',
      distributed: false,

    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
      colors: ['#222']
    }
  },

  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    // categories: [['🇸🇰','SK','🔴'], ['🇱🇺','LU'], ['🇦🇹','AT'],['🇩🇪','DE'], ['🇸🇮', 'SI','🔴'], ['🇬🇧','UK'],['🇵🇹','PT'],['🇲🇹','MT'],['🇨🇾','CY'],["🇬🇷",'EL'], ["🇪🇺",'EU','🔵'], ["🇩🇰",'DK'], ['🇮🇪','IE'], ['🇫🇷','FR'], ["🇪🇸",'ES'],['🇵🇱','PL','🔴'],['🇭🇺','HU','🔴'],['🇨🇿','CZ','🔴'],['🇧🇪','BE'],['🇫🇮','FI'],['🇮🇹','IT'],['🇪🇪','EE','🔴'],['🇸🇪','SE'],['🇧🇬','BG','🔴'],['🇭🇷','HR','🔴'],["🇳🇱",'NL'],["🇷🇴",'RO','🔴'],["🇱🇻",'LV','🔴'],["🇱🇹",'LT','🔴']],                              
    categories: [['🇸🇰','SK'],  ['🇸🇮', 'SI'],  ["🇪🇺",'EU','🔵'], ['🇵🇱','PL'],['🇭🇺','HU'],['🇨🇿','CZ'],['🇪🇪','EE'],['🇧🇬','BG'],['🇭🇷','HR'],["🇷🇴",'RO'],["🇱🇻",'LV'],["🇱🇹",'LT']],                              

    labels: {
      rotate: false
    }
  },
  yaxis: {
    max: 100
  },
  tooltip: {
    enabled: false
  },
  fill: {
    opacity: 1

  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 14,
    offsetY: 20,
    onItemClick: {
      toggleDataSeries: false
    },
    onItemHover: {
      highlightDataSeries: true
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
  }

};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();





