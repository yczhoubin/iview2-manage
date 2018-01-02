<style>

</style>
<template>
  <!-- 招商综合分析图 -->
  <div style="width:100%; height:100%;">
    <!-- 图标综合 -->
    <AchievementSummary ref="achievementSummary"></AchievementSummary>
  </div>
</template>
<script>
import SalesFunnel from "./echarts-sales-funnel.vue";
import Industry from "./echarts-industry.vue";
import GoalCompletion from "./echarts-goal-completion.vue";
import CompletionProgress from "./completion-progress.vue";
import AchievementSummary from "./achievement-summary.vue";

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
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.refresh();
    // });
  },
  methods: {
    refresh() {
      // this.$refs.achievementSummary.refresh();
      // this.$refs.completionProgress.refresh();
      // this.$refs.salesFunnel.refresh();
      // this.$refs.industry.refresh();
    }
  },
  computed: {
    
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
