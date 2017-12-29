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
import options from "./option-config";
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/map')
var china = require('echarts/map/js/china.js');

var optionData = require("./option-data.js").options;

export default {
  mounted() {
    this.initData();
    this.drawMap();
  },
  beforeDestroy() {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }
  },
  props: {
    interval: {
      type: Number,
      default: 10000
    },
    timing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      option: options.option,
      optoinArray: [],
      legendData: [],  // 图例数组
      legendSelected: {},  // 图例选择数组
      // interval: 10000,
      myInterval: null,
      myChart: null  //echarts组件对象
    };
  },
  methods: {
    initData() {
      this.legendData = optionData.legendData;  // 图例数组
      this.legendSelected = optionData.legendSelected;  // 图例选择数组
      this.optionArray = optionData.optionArray;
    },
    drawMap() {
      let echartsDom = document.getElementById('myChart');
      this.myChart = echarts.init(echartsDom);
      this.initOption();
      this.myChart.setOption(this.option, true);
      if(this.timing) {
        this.myInterval = setInterval(this.intervalCallback, this.interval);
      }
    },
    initOption() {
      this.setLegend();
      this.setSeries();
    },
    setSeries() {
      let series = [];
      for(let i = 0; i < this.optionArray.length; i++) {
        let serie = options.oneSerie(this.optionArray[i], i);
        series = series.concat(serie);
      }
      this.option.series = series;
    },
    setLegend() {
      // 设置图例信息
      let legend = this.option.legend;
      // legend.data = this.getLengendData();
      legend.data = this.legendData;
      legend.selected = this.legendSelected;
      legend.formatter = this.legendFormatter;
      if(this.timing) {  //如果采用轮播方式，则不支持点击切换
        legend.selectedMode = false;
      }
    },
    getLengendData() {
      // 图例中要展示的项目信息
      return this.legendData;
      // return ['北京', '上海', '广州'];
    },
    legendFormatter(name) {
      // 设置要展示的信息，默认是（name）
      return name + ' Top10';
    },
    intervalCallback() {
      //定时器回调函数
      console.log("current selected:" + JSON.stringify(this.option.legend.selected));
      let selected = this.option.legend.selected;
      let curSelected = 0; 
      for(let i = 0; i < this.legendData.length; i++) {
        let property = selected[this.legendData[i]];
        if (property) {
          curSelected = i;
          break;
        }
      }
      let newSelect = curSelected + 1;
      if (newSelect >= this.legendData.length) {
        newSelect = 0;
      }
      let newlegendSelected = {};
      for(let i = 0; i < this.legendData.length; i++) {
        if (newSelect == i) {
          newlegendSelected[this.legendData[i]] = true;
        } else {
          newlegendSelected[this.legendData[i]] = false;
        }
      }
      this.legend.selected = newlegendSelected;
      console.log("this.option.legend.selected：" + JSON.stringify(this.option.legend.selected));
      this.myChart.setOption(this.option, true);
    }
  }
};
</script>

