<style>
.funnel-echart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <!-- 漏斗图 -->
    <div class="funnel-echart">
        <div id="echartsSalesFunnel" style="width:100%; height:100%"></div>
    </div>
</template>
<script>
import options from "./funnel-option";
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/funnel");
export default {
  mounted() {
    let echartsDom = document.getElementById("echartsSalesFunnel");
    this.myChart = echarts.init(echartsDom);
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
      this.setSeries();
    },
    setSeries: function() {
        let series = [];
        let length = this.serieItems.length;
        for(let i = 0; i < length; i++) {
          series.push(options.oneSeries(this.serieItems[i], i, length));
        }
        this.option.series = series;
    },
    refresh: function(params) {
      try {
        this.serieItems = params.serieItems ? params.serieItems : [];
        this.myChart.resize();
        this.initData();
        this.drowChart();
      } catch (error) {
        this.$Message.info("招商情况综合分析-招商进度刷新失败：" + JSON.stringify(error));
      }
    }
  }
};
</script>