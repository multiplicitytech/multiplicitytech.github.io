    
        var options = {
          series: [55.7, 33.5, 10.8],
          chart: {
          width: 380,
          type: 'pie',
        },
        colors: ['#01c59b', '#ff2238', '#ffa300'],
        labels: ['Baemin', 'Yogiyo', 'Baedaltong'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
            width: 200
            },
            legend: 'none'
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();