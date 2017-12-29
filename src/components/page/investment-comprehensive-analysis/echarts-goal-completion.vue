<style>
.goal-completion-echart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <!-- 目标完成情况(8个圆圈) -->
  <div class="goal-completion-echart">
    <div id="goalCompletion" style="width:100%; height:100%"></div>
  </div>
</template>
<script>
import options from "./goal-completion-option";
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");

export default {
  mounted() {
    this.myChart = echarts.init(document.getElementById("goalCompletion"));
    this.initData();
    this.drowChart();
  },
  props: {
    // id: {
    //   type: String,
    //   require: true
    // }
  },
  data() {
    return {
      myChart: null,
      option: options.option,
      totleSerieItem: {},
      serieItems: []
      // totleSerieItem: options.totleSerieItem,
      // serieItems: options.serieItems,
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
      series.push(options.oneSeries(this.totleSerieItem));
      let length = this.serieItems.length;
      for (let i = 0; i < length; i++) {
        series.push(options.oneSeries(this.serieItems[i], i, length));
      }
      this.option.series = series;
    },
    refresh: function(params) {
      try {
        this.totleSerieItem = params.totleSerieItem ? params.totleSerieItem : {};
        this.serieItems = params.serieItems ? params.serieItems : [];
        this.myChart.resize();
        this.initData();
        this.drowChart();
      } catch (error) {
        this.$Message.info("招商情况综合分析-业绩完成情况刷新失败：" + JSON.stringify(error));
      }
    }
  }
};
</script>
