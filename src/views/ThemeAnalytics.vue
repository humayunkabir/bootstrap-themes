<template>
  <v-container class="fill-height">
    <v-progress-linear v-if="loading" indeterminate />
    <v-chart
      v-if="themes"
      :options="options"
      :init-options="initOptions"
      autoresize
    />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ECharts from "vue-echarts";

import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
// import "echarts/lib/component/title";

export default {
  components: {
    "v-chart": ECharts,
  },
  computed: mapGetters(["loading", "themes"]),
  data() {
    return {
      initOptions: {
        renderer: "canvas",
      },
      options: {
        // title: {
        //   text: "Bootstrap Themes Analysis",
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [],
      },
    };
  },
  watch: {
    themes() {
      this.init();
    },
  },
  methods: {
    titleFormater(title) {
      return `${title.split(" ")[0].split("–")[0].trim()} ${
        title.toLowerCase().includes("react") ? "- React" : ""
      }`.trim();
    },
    init() {
      const limit = 15;
      const legendData = this.themes
        .slice(0, limit)
        .map(({ title }) => this.titleFormater(title));
      this.options.legend.data = legendData;
      this.options.xAxis.data = Object.keys(this.themes[0].purchases);
      this.options.series = this.themes
        .slice(0, limit)
        .map(({ title, purchases }) => ({
          name: this.titleFormater(title),
          type: "line",
          data: Object.values(purchases),
          smooth: false,
        }));
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>