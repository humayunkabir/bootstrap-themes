<template>
  <v-container class="fill-height">
    <v-chart :options="options" :init-options="initOptions" autoresize />
    <!-- <pre v-if="themes">{{ JSON.stringify(themes, null, 2) }}</pre> -->
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ECharts from "vue-echarts";

import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/map";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";
import "echarts/lib/component/geo";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/dataset";

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
        title: {
          text: "Themes",
        },
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
  created() {
    const limit = 15;
    const legendData =  this.themes.slice(0, limit).map(({ title }) => title.split(' ')[0].trim());
    console.log(legendData);
    this.options.legend.data = legendData;
    this.options.xAxis.data = Object.keys(this.themes[0].purchases);
    this.options.series = this.themes
      .slice(0, limit)
      .map(({ title, purchases }) => ({
        name: title.split(' ')[0].trim(),
        type: "line",
        stack: "Hello",
        data: Object.values(purchases),
      }));
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>