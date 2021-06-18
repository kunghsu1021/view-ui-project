<template>
  <div>
    <h1>展示echart的折线图例子</h1>
    <Button type="primary" @click="initCHartBySeries()">刷新</Button>
    <div ref="chart" style="width: 100%; height: 500px"></div>
  </div>
</template>
<script>
// import * as echarts from 'echarts';
export default {
  data() {
    return {
        title:"lineChartDemo",
      myChartOption: {},
      myGlobalChart: null
    }
  },
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
          title: {
            //图表标题相关
            text: "球星得分趋势图",
            subtext: "展示得分高峰",
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
          grid: {
            top: 50,
          },
          //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
          legend: {
            y: '90%',
            data: ["麦迪", "詹姆斯"]
          },
          color: [//假如有很多类别，每一类最好给一种不同的颜色，用以区分，一个图表不能无限加线，太多线集中在一起也不好察看
            '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc',
            '#666666', '#bf9213', '#17efc7', '#1732ef', '#ef175d', '#ef3f17'
          ],
          xAxis: {
            type: "category",
            boundaryGap: false, //坐标两边不留白
            data: ["06-01", "06-02", "06-03", "06-04", "06-05", "06-06", "06-07"], //横轴
            name: '',
            nameTextStyle: {
              color: "rgba(206, 237, 8, 1)",
              fontSize: 16,
              padding: [0, 0, 0, 0]

            },
            axisLine: {
              lineStyle: {
                color: "#5470c6"
              }
            }
          },
          yAxis: {
            type: "value",
            name: "单位：分",
            nameTextStyle: {
              color: "rgba(255, 115, 0, 1)",
              fontSize: 16,
            }
          },
          series: [
            //具体的数据
            {
              name: '麦迪',
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
            {
              name: '詹姆斯',
              data: [35, 59, 26, 45, 70, 34, 20],
              type: "line",
            },
          ],
        };

        this.myChartOption = option;
        this.myGlobalChart = myChart;
        // myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //   myChart.resize();
        // });
      }
      this.$on("hook:destroyed", () => {
        // window.removeEventListener("resize", function () {
        //   myChart.resize();
        // });
      });
    },
    initCHartBySeries() {

      //通过获取后端数据，渲染图表
      //发起ajax请求
      let _this = this;
      _this.$echarts.dispose(_this.myGlobalChart);

      this.COMMON.Http.get('http://localhost:8080/kunsharedemo/vue-iview-demo/point-count', (res) => {
        console.log(res);
                console.log(this.title);
        if (res.msgCode = '000000') {
          //返回成功
          if (!res.value || res.value.length < 1) {
            return;
          }
          let series = [];
          let legendData = [];
          //设置颜色
          for (var i = 0; i < res.value.length; i++) {
            let obj = {
              name: res.value[i].name,
              data: res.value[i].data,
              type: 'line', //之前少了这个，一直提示 series not exists. Legend data should be same with series name or data name.
              lineStyle: {
                normal: {
                  color: this.myChartOption.color[i]
                }
              }
            };
            legendData.push(res.value[i].name);
            series.push(obj);
          }
          this.myChartOption.legend.data = legendData;
          this.myChartOption.series = series;
          //重新描绘图表
          console.log('重新描绘图表');
          this.myGlobalChart = this.$echarts.init(this.$refs.chart);
          this.myGlobalChart.setOption(this.myChartOption);
        } else {
          this.$Message.error('error!!');
        }
      });
    }
  },
};
</script>
