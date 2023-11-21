<!DOCTYPE html>
<html>
<head>
    @foreach (Statamic::availableStyles(request()) as $package => $paths)
        @foreach ($paths as $path)
            <link href="{{ Statamic::vendorPackageAssetUrl($package, $path, 'css') }}" rel="stylesheet" />
        @endforeach
    @endforeach

    @livewireStyles
    
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
</head>
<body class="p-12">

    <div class="shadow-md bg-white rounded-xl p-6">
        <h1>Inline Frame Contents</h1>

        <livewire:counter />

        <div id="chart" class="w-full h-96" style="aspect-ratio: 3/1;"></div>

    </div>

<script type="text/javascript">
      // Initialize the echarts instance based on the prepared dom
      var myChart = echarts.init(document.getElementById('chart'));

      window.addEventListener('resize', function() {
        myChart.resize();
    });

      // Specify the configuration items and data for the chart
    //   var option = {
    //     title: {
    //       text: 'ECharts Getting Started Example'
    //     },
    //     tooltip: {},
    //     legend: {
    //       data: ['sales']
    //     },
    //     xAxis: {
    //       data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: 'sales',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //       }
    //     ]
    //   };
    option = {
        // animation: false,
        animationDuration: 200,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
    //   dataView: { show: true, readOnly: false },
    //   magicType: { show: true, type: ['line', 'bar'] },
    //   restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Evaporation', 'Precipitation', 'Temperature']
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml';
        }
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml';
        }
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °C';
        }
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};

      // Display the chart using the configuration items and data just specified.
      myChart.setOption(option);
    </script>

    @livewireScripts
</body>
</html>

