<style>
.completion-progress-echart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div class="completion-progress-echart">
    <div id="completionProgress" style="width:100%; height:100%"></div>
  </div>
</template>
<script>
import options from "./completion-progress-option";
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");

export default {
  mounted() {
    this.myChart = echarts.init(document.getElementById("completionProgress"));
    this.initData();
    this.drowChart();
  },
  data() {
    return {
      myChart: null,
      option: options.option,
      serieItems: []
    };
  },
  methods: {
    drowChart: function() {
      this.myChart.setOption(this.option, false);
    },
    initData: function() {
      this.setXAxis();
      this.setSeries();
    },
    setSeries: function() {
      let values = [];
      for (let i = 0; i < this.serieItems.length; i++) {
        values.push(this.serieItems[i].value);
      }
      let series = [];
      series.push(options.serieBackground(values.length));
      series.push(options.serieBefore(values));
      this.option.series = series;
    },
    setXAxis: function() {
      let names = [];
      for (let i = 0; i < this.serieItems.length; i++) {
        let item = {
          value: this.serieItems[i].name,
          textStyle: options.xAxis1TextStyle
        };
        names.push(item);
      }
      let xAxis = [];
      xAxis.push(options.xAxis1(names, names.length));
      xAxis.push(options.xAxis2(names));
      this.option.xAxis = xAxis;
    },
    refresh: function(params) {
      try {
        this.serieItems = params.serieItems ? params.serieItems : [];
        this.myChart.resize();
        this.initData();
        this.drowChart();
      } catch (error) {
        this.$Message.info("招商情况综合分析-项目完成进度图刷新失败：" + JSON.stringify(error));
      }
    }
  }
};
</script>
