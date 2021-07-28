<template>
  <div class="cron">
    <h1>vue-cron</h1>
    <el-popover v-model="cronPopover">
      <!-- 假如是全局引入，则用vueCron
               i18n="cn" 默认显示中文  -->
      <vueCron @change="changeCron" @close="cronPopover=false" i18n="cn"></vueCron>
      <!-- 假如是局部引入，用cron -->
      <!--             <cron @change="changeCron" @close="cronPopover=false" i18n="en"></cron>
 -->
      <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"
        style="width:200px;"></el-input>
    </el-popover>
          <Button type="primary" @click="sendToServer()">Submit</Button>
  </div>
</template>
 
<script>
//局部引入时使用（因为我是全局引入，所以注释掉）
// import {cron} from 'vue-cron';

export default {
  //局部引入时使用（因为我是全局引入，所以注释掉）
  // components: { cron },
  data() {
    return {
      cronPopover: false,
      cron: '' //cron表达式字符串
    }
  },
  methods: {
    changeCron(val) {
      this.cron = val;
      //
      console.log("取得cron表达式：" + this.cron);
    },
    sendToServer() {
        let params = {};
        params.cron = this.cron;
      this.COMMON.Http.post('http://localhost:8080/kunsharedemo/vue-cron-demo/cron', params, (res) => {
        console.log(res);
        console.log(this.title);
        if (res.msgCode = '000000') {
          //返回成功
          if (!res.value || res.value.length < 1) {
            return;
          }

        } else {
          this.$Message.error('error!!');
        }
      });
    }
  },
}
</script>