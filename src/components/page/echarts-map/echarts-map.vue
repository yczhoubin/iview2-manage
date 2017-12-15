<style>
.echarts {
  width: 100%;
  height: 100%
}
</style>
<template>
  <div class="echarts">
    <div id="myChart" style="width:100%; height:100%"></div>
  </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
// 地图
require('echarts/lib/chart/map')

var china = require('echarts/map/js/china.js');

var optionConfig = require("./option-config").options;

export default {
  mounted() {
    this.drawMap();
  },
  data() {
    return {
      options: optionConfig
    };
  },
  methods: {
    drawMap() {
      let echartsDom = document.getElementById('myChart');
      console.log(echartsDom);
      let myChart = echarts.init(echartsDom);
      this.initOption();
      myChart.setOption(this.options, true);
    },
    initOption() {
      this.setLegend();
    },
    setLegend() {
      // 设置图例信息
      let legend = this.options.legend;
      legend.data = this.getLengendData();
      legend.formatter = this.legendFormatter;
    },
    getLengendData() {
      // 图例中要展示的项目信息
      return ['北京', '上海', '广州'];
    },
    legendFormatter(name) {
      // 设置要展示的信息，默认是（name）
      return name + ' Top10';
    }
  }
};
</script>

