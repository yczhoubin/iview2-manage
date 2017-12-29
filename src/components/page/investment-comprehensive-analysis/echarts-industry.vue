<style>
.industry-echart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <!-- 行业分布图（环形图） -->
  <div class="industry-echart">
    <div id="echartsIndustry" style="width:100%; height:100%"></div>
  </div>
</template>
<script>
import options from "./industry-option";
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");

export default {
  mounted() {
    this.myChart = echarts.init(document.getElementById("echartsIndustry"));
    this.initData();
    this.drowChart();
  },
  data() {
    return {
      myChart: null,
      option: options.option,
      serieItems: []
      // serieItems: options.serieItems
    };
  },
  methods: {
    drowChart: function() {
      this.myChart.setOption(this.option, false);
    },
    initData: function() {
      this.setSeries();
      this.setLegend();
    },
    setSeries: function() {
      let series = [];
      let length = this.serieItems.length;
      for (let i = 0; i < length; i++) {
        series.push(options.oneSerie(this.serieItems[i], i, length));
      }
      this.option.series = series;
    },
    setLegend: function() {
      this.option.legend.formatter = this.legendFormatter();
      if(this.serieItems.length > 0) {
        let value = this.serieItems[0].value;
        if(value.length > 0) {
          let data = [];
          data.push(value[0].name);
          this.option.legend.data = data;
        }
      }
    },
    legendFormatter: function(name) {
      let total = 0;
      let averagePercent; //综合正确率
      let echartData = [];
      if(this.serieItems.length > 0) {
        echartData = this.serieItems[0].value;
      }
      echartData.forEach(function(value, index, array) {
        total += value.value;
      });
      return "{total|" + total + "}";
    },
    refresh: function(params) {
      try {
        this.serieItems = params.serieItems ? params.serieItems : [];
        this.myChart.resize();
        this.initData();
        this.drowChart();
      } catch (error) {
        this.$Message.info("招商情况综合分析-行业分布刷新失败：" + JSON.stringify(error));
      }
      
    }
  }
};
</script>
