<template>
  <div>
    <h1>展示echart的折线图例子</h1>
    <div ref="chart" style="width: 100%; height: 500px"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getEchartData();
  },
  methods: {
    getEchartData() {
      //获取到图表元素（）
      const chart = this.$refs.chart;
      if (chart) {
        //初始化图表容器
        const myChart = this.$echarts.init(chart);
        //这是要传给图表容器的数据，基于这些数据来构造图表
        let option = {
          tooltip: {
            trigger: "item", //  数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
          },
          borderWidth: "10", //这个好像没起作用
          borderColor: "red",
          title: {//图表标题相关
            text: "消息发送趋势图",
            subtext: "展示消息发送频率高峰",
            left: "center",
            top: "2%", //标题显示的位置
            textStyle: {
              fontSize: 30,
              color: "rgba(17, 200, 87, 0.59)",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "sans-serif",
            },
            subtextStyle: {
              fontSize: 20,
              align: "center",
            },
            show: true,
            textAlign: "auto",
          },
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            //具体的数据
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
  },
};
</script>
