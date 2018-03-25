<style>
.echarts {
  width: 100%;
  height: 100%;
}
.window-zoom-full {
  width: 32px;
  height: 132px;
  position: absolute;
  z-index: 1000;
  top: 32px;
  right: 32px;
  cursor: pointer;
}
</style>
<template>
  <div id="test" class="echarts">
    <div class="window-zoom-full" @click="zoomChange">
        <Icon type="arrow-expand"></Icon>
      </div>
    <div id="myChart" style="width:100%; height:100%">
      
    </div>
  </div>
</template>
<script>
import options from "./option-config";
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
var china = require("echarts/map/js/china.js");

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
      legendData: [], // 图例数组
      legendSelected: {}, // 图例选择数组
      // interval: 10000,
      myInterval: null,
      myChart: null, //echarts组件对象
      normalSize: true,
      fullScreenEven: null,
      registerListener: false   //是否在注册监听事件
    };
  },
  methods: {
    initData() {
      this.legendData = optionData.legendData; // 图例数组
      this.legendSelected = optionData.legendSelected; // 图例选择数组
      this.optionArray = optionData.optionArray;
    },
    drawMap() {
      let echartsDom = document.getElementById("myChart");
      this.myChart = echarts.init(echartsDom);
      this.initOption();
      this.setOptions();
    },
    initOption() {
      this.setLegend();
      this.setSeries();
    },
    setOptions() {
      this.myChart.resize();
      this.initOption();
      this.myChart.setOption(this.option, true);
      if (this.timing) {
        this.myInterval = setInterval(this.intervalCallback, this.interval);
      }
    },
    setSeries() {
      let series = [];
      for (let i = 0; i < this.optionArray.length; i++) {
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
      if (this.timing) {
        //如果采用轮播方式，则不支持点击切换
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
      return name + " Top10";
    },
    intervalCallback() {
      //定时器回调函数
      console.log(
        "current selected:" + JSON.stringify(this.option.legend.selected)
      );
      let selected = this.option.legend.selected;
      let curSelected = 0;
      for (let i = 0; i < this.legendData.length; i++) {
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
      for (let i = 0; i < this.legendData.length; i++) {
        if (newSelect == i) {
          newlegendSelected[this.legendData[i]] = true;
        } else {
          newlegendSelected[this.legendData[i]] = false;
        }
      }
      this.legend.selected = newlegendSelected;
      console.log(
        "this.option.legend.selected：" +
          JSON.stringify(this.option.legend.selected)
      );
      this.myChart.setOption(this.option, true);
    },
    zoomChange: function() {
      // this.normalSize 用来记录当前是普通模式还是全屏模式
      if (this.normalSize) {
        this.normalSize = false;
        //设置最大化
        console.log("最大化设置");
        let element = document.getElementById("test");
        this.fullScreenEven = this.listenerFullScreenOption();
        this.launchIntoFullscreen(element);
      } else {
        this.normalSize = true;
        //还原设置
        console.log("还原最大化设置");
        this.fullScreenEven = this.listenerFullScreenOption();
        this.exitFullscreen();
      }
    },
    launchIntoFullscreen(element) {
      if (element.requestFullscreen) {
        document.addEventListener("fullscreenchange", this.listenerFullScreenOption);
        element.requestFullscreen();
        return;
      } else if (element.mozRequestFullScreen) {
        document.addEventListener("mozfullscreenchange", this.listenerFullScreenOption);
        element.mozRequestFullScreen();
        return;
      } else if (element.webkitRequestFullscreen) {
        document.addEventListener("webkitfullscreenchange", this.listenerFullScreenOption);
        element.webkitRequestFullscreen();
        return;
      } else if (element.msRequestFullscreen) {
        document.addEventListener("MSFullscreenChange", this.listenerFullScreenOption);
        element.msRequestFullscreen();
        return;
      }
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.addEventListener("fullscreenchange", this.listenerFullScreenOption);
        document.exitFullscreen();
        return;
      } else if (document.mozCancelFullScreen) {
        document.addEventListener("mozfullscreenchange", this.listenerFullScreenOption);
        document.mozCancelFullScreen();
        return;
      } else if (document.webkitExitFullscreen) {
        document.addEventListener(
          "webkitfullscreenchange",
          this.listenerFullScreenOption
        );
        document.webkitExitFullscreen();
        return;
      } else if (document.msExitFullscreen) {
        document.addEventListener("MSFullscreenChange", this.listenerFullScreenOption);
        document.msExiFullscreen();
        return;
      }
    },
    listenerFullScreenOption: function(refName) {
      // 监听全屏的操作，判断是开启全屏还是退出全屏
      // 这个方法会掉用两次，再注册监听时调用一次，在全屏或退出全屏时会再调一次，
      // 全屏时第一次获取到的fullscreenElement为空,这是因为监听事件还没注册上，第二次是全屏完成后调用的可以获取到
      let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement 
        || document.webkitFullscreenElement || document.msRequestFullscreen;
      if (!fullscreenElement || fullscreenElement == null) {
        console.log("ESC还原最大化设置");
        // 退出全屏操作
        this.normalSize = true;
        // this.$refs[refName].upNormalSize(true);
      } else {
        this.normalSize = false;
      }
      console.log("监听中normalSize值" + this.normalSize);
      console.log("监听中刷新echarts图显示");
      // 这个方法是重新设置Echarts图的方法
      this.setOptions();
    }
  }
};
</script>

