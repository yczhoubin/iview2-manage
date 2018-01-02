<style>
.achievement-summary-echart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div class="achievement-summary-echart">
    <div id="achievementSummary" style="width:100%; height:100%"></div>
  </div>
</template>
<script>
import options from "./achievement-summary-option";
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/chart/gauge");

export default {
  mounted() {
    this.myChart = echarts.init(document.getElementById("achievementSummary"));
    this.initData();
    this.drowChart();
  },
  data() {
    return {
      myChart: null,
      option: options.option,
      serieItem: options.serieItem
    };
  },
  methods: {
    drowChart: function() {
      this.myChart.setOption(this.option, false);
    },
    initData: function() {
      this.setSeries();
    },
    setSeries: function() {
      let series = [];
      series.push(options.serieOutPie(this.serieItem));
      this.option.series = series;
    },
    refresh: function(params) {
      this.myChart.resize();
      this.initData();
      this.drowChart();
    }
  }
};
</script>
