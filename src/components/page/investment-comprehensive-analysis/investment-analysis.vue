<style lang="less">
.crm-analyze {
  background-image: url("../../../../images/echartsbg.png") !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  -o-background-size: cover !important;
  background-position: center 0 !important;
  .crm-analyze-title{
    position: absolute;
    width: 100%;
    top:20px;
    left:20px;
    width: 100%;
    height: 20px;
    font-size:14px;
    color:#5cd8ff;
    line-height: 20px;
  }
}
.crm-analyze-top {
  width: 100%;
  height: 52px;
  margin-bottom: 24px;
  .crm-analyze-top-bg{
    width: 497px;
    height: 52px;
    margin: 0 auto;
    background: url("../../../../images/analyze-bg.svg") no-repeat;
    font-size:20px;
    color:#00e1fe;
    text-align:center;
    line-height: 52px;
  }
}
.crm-analyze-bottom {
  width: 100%;
  height: 100%;
  .crm-analyze-bottom1{
    width: 100%;
    height: 45%;
    margin-bottom: 15px;
  }
  .crm-analyze-bottom2{
    width: 100%;
    height: 41.64%;
  }
}
.details-banner {
  float: left;
  width: 32.5%;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  .ivu-carousel {
    width: 100%;
    height: 100%;
    .ivu-carousel-list {
      height: 100% !important;
    }
    .ivu-carousel-track {
      height: 100% !important;
    }
    .ivu-carousel-item {
      height: 100% !important;
    }
  }
  .tips {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 120, 152, 0.6);
    background: rgba(0, 116, 131, 0.06);
    position: relative;
    .tips-lefttop {
      position: absolute;
      width: 11px;
      height: 11px;
      top: 0;
      left: 0;
      background-image: url("../../../../images/customerechart.svg") !important;
      background-position: -10px -10px;
      z-index: 4;
    }
    .tips-righttop {
      position: absolute;
      width: 11px;
      height: 11px;
      top: 0;
      right: 0;
      background-image: url("../../../../images/customerechart.svg") !important;
      background-position: -31px -10px;
      // background-position:  -10px -31px;
      z-index: 4;
    }
    .tips-leftbottom {
      position: absolute;
      width: 11px;
      height: 11px;
      bottom: 0;
      left: 0;
      background-image: url("../../../../images/customerechart.svg") !important;
      background-position: -52px -10px;
      // background-position:-10px -52px;
      z-index: 4;
    }
    .tips-rightbottom {
      position: absolute;
      width: 11px;
      height: 11px;
      bottom: 0;
      right: 0;
      background-image: url("../../../../images/customerechart.svg") !important;
      background-position: -73px -10px;
      // background-position:-10px -73px ;
      z-index: 4;
    }
  }
  .details-wrap {
    width: 100%;
    height: 100%;
    // width: 400px;
    // height: 130px;
    // position: absolute;
    // top: 50%;
    // margin-top: -65px;
    // left: 50%;
    // margin-left: -200px;
    .details-item {
      height: 20px;
      width: 100%;
      line-height: 20px;
      font-size: 14px;
      color: #fff;
      margin-bottom: 12px;
      margin-left: 40px;
      &:first-child{
        margin-top: 58px;
      }
      .details-word{
        float: left;
      }
      .details-word1{
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 20px;
        margin-right:20px;
      }
      .details-word2{
        width: 60px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right:20px;
      }
      .details-icon {
        width: 6px;
        height: 6px;
        float: left;
        margin-top: 6px;
        background-image: url("../../../../images/customerechart.svg") !important;
        margin-right: 10px;
      }
      .details-icon1 {
        background-position: -10px -284px;
      }
      .details-icon2 {
        background-position: -27px -284px;
      }
      .details-icon3 {
        background-position: -43px -284px;
      }
    }
  }
  .customer-details-banner {
    width: 100%;
    height: 50%;
    padding-bottom: 15px;
    .demo-carousel {
      width: 100%;
      height: 100%;
    }
  }
  .sign-details-banner {
    width: 100%;
    height: 50%;
    .demo-carousel {
      width: 100%;
      height: 100%;
    }
  }
}
.ProjectFinishItems{
  float: left;
  width: 37.8%;
  height: 100%;
  margin-right:15px; 
  border: 1px solid rgba(0, 120, 152, 0.6);
  position: relative;
}
.goal-completion-div {
  float: left;
  width: 25.3%;
  height: 100%;
  // margin-right: 15px;
  border: 1px solid rgba(0, 120, 152, 0.6);
  position: relative;
  .goal-completion-echart {
    width: 100%;
    height: 100%;
  }
}
.funnel-div {
  float: left;
  width: 36.4%;
  height: 100%;
  border: 1px solid rgba(0, 120, 152, 0.6);
  position: relative;
  .funnel-echart {
    width: 100%;
    height: 100%;
  }
}
.industry-div {
  float: left;
  width: 60%;
  height: 100%;
  margin-right: 15px;
  margin-left: 15px;
  border: 1px solid rgba(0, 120, 152, 0.6);
  position: relative;
  .industry-echart {
    width: 100%;
    height: 100%;
  }
}

.window-zoom-normal {
  width: 20px;
  height: 15px;
  position: absolute;
  z-index: 3;
  top: 18px;
  right: 18px;
  background-image: url("../../../../images/customerechart.svg") !important;
  background-position: -40px -324px;
  cursor: pointer;
}
.window-zoom-full {
  width: 20px;
  height: 15px;
  position: absolute;
  z-index: 3;
  top: 18px;
  right: 18px;
  background-image: url("../../../../images/customerechart.svg") !important;
  background-position: -10px -324px;
  cursor: pointer;
}
</style>
<template>
  <!-- 招商综合分析图 -->
  <div style="width:100%; height:100%;" class="crm-analyze">
    <div :class="windowZoomClass" @click="zoomChange"></div>
    <div class="crm-analyze-top">
      <div class="crm-analyze-top-bg">
        招商情况综合分析
      </div>
    </div>
    <div class="crm-analyze-bottom">
      <div class="crm-analyze-bottom1" >
        <div class="details-banner">
          <div class="customer-details-banner">
            <div class="tips">
              <div class="crm-analyze-title">
                客户详情
              </div>
              <div class="tips-lefttop"></div>
              <div class="tips-righttop"></div>
              <div class="tips-leftbottom"></div>
              <div class="tips-rightbottom"></div>
              <Carousel autoplay v-model="value2" loop :autoplay-speed="5000" easing dots="none">
                  <CarouselItem v-for="(item, index) in customerDetails" :key="index">
                      <div class="demo-carousel">
                        <div class="details-wrap">
                          <div class="details-item" v-for="(customer,indexi) in item" :key="indexi">
                            <div class="details-icon details-icon1"></div>
                            <div class="details-word">{{customer.park}}</div>
                            <div class="details-word details-word1">{{customer.company}}</div>
                            <div class="details-word details-word2">{{customer.industry}}</div>
                            <div class="details-word">{{customer.name}}</div>
                          </div>
                        </div>
                      </div>
                  </CarouselItem>
              </Carousel>
            </div>
          </div>
          <div class="sign-details-banner">
            <div class="tips">
              <div class="crm-analyze-title">
                签约详情
              </div>
              <div class="tips-lefttop"></div>
              <div class="tips-righttop"></div>
              <div class="tips-leftbottom"></div>
              <div class="tips-rightbottom"></div>
              <Carousel autoplay v-model="value3" loop easing dots="none" :autoplay-speed="8000">
                  <CarouselItem v-for="(item, index) in signDetails" :key="index">
                      <div class="demo-carousel">
                        <div class="details-wrap">
                          <div class="details-item" v-for="(sign,indexi) in item" :key="indexi">
                            <div class="details-icon details-icon1"></div>
                            <div class="details-word">{{sign.park}}</div>
                            <div class="details-word details-word1">{{sign.company}}</div>
                            <div class="details-word details-word2">{{sign.area}}</div>
                            <div class="details-word">{{sign.money}}</div>
                          </div>
                        </div>
                      </div>
                  </CarouselItem>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="ProjectFinishItems">
          <div class="crm-analyze-title">
                项目完成进度
          </div>
          <CompletionProgress ref = "completionProgress"></CompletionProgress>
        </div>
        <div class="goal-completion-div">
          <div class="crm-analyze-title">
                公司业绩完成进度
            </div>
          <AchievementSummary ref="achievementSummary" class="goal-completion-echart"></AchievementSummary>
        </div>
      </div>
      <div class="crm-analyze-bottom2" >
        <div class="industry-div">
          <div class="crm-analyze-title">
                行业分布
            </div>
          <Industry ref="industry" class="industry-echart"></Industry>
        </div>
        <div class="funnel-div">
          <div class="crm-analyze-title">
                招商进度
            </div>
          <SalesFunnel ref="salesFunnel" class="funnel-echart"></SalesFunnel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SalesFunnel from "./echarts-sales-funnel.vue";
import Industry from "./echarts-industry.vue";
import GoalCompletion from "./echarts-goal-completion.vue";
import CompletionProgress from './completion-progress.vue';
import AchievementSummary from './achievement-summary.vue';

export default {
  props: {
    interval: {
      type: Number,
      default: 10
    },
    zoom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      normalSize: true,
      value2: 0,
      value3: 0,
      params: {},
      customerDetails:[],
      signDetails:[]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.refresh();
    });
  },
  methods: {
    refresh() {
      let that = this;
      INZ.Util
      .invokeServer({
        path: "/basis/sysconfig/echartconfig/investmentAnalysis",
        contentType: "application/json",
        type: "GET"
      })
      .then((data, textStatus, response) => {
        debugger
        if (!data) {
          that.params = {};
        } else {
          let json = JSON.parse(data);
          if(json.constructor == String) {
            that.params = JSON.parse(json);
          } else {
            that.params = json;
          }
        }
        let achievementSummary = that.params.achievementSummary ? that.params.achievementSummary : {};
        let completionProgress = that.params.completionProgress ? that.params.completionProgress : {};
        let funnel = that.params.funnel ? that.params.funnel : {};
        let industry = that.params.industry ? that.params.industry : {};
        that.customerDetails = that.params.customerDetails.value ? that.params.customerDetails.value : [];
        that.signDetails = that.params.signDetails.value ? that.params.signDetails.value : [];
        that.$refs.achievementSummary.refresh(achievementSummary);
        that.$refs.completionProgress.refresh(completionProgress);
        that.$refs.salesFunnel.refresh(funnel);
        that.$refs.industry.refresh(industry);
      })
      .catch((XMLHttpRequest, textStatus, errorThrown) => {
        that.$Message.info("数据查询失败");
        console.log("招商情况综合分析数据刷新失败：" + JSON.stringify(XMLHttpRequest));
      });
    },
    zoomChange() {
      this.normalSize = !this.normalSize;
      this.$emit("handleView", this.normalSize);
    }
  },
  computed: {
    windowZoomClass: {
      get: function() {
        if (this.normalSize) {
          return "window-zoom-normal";
        } else {
          return "window-zoom-full";
        }
      }
    }
  },
  components: {
    SalesFunnel,
    Industry,
    GoalCompletion,
    CompletionProgress,
    AchievementSummary
  }
};
</script>
