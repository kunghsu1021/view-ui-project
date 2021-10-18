<template>
<div>
    <!-- 倒计时demo 
    http://localhost:8080/other/countdown -->

<!-- fullscreen -->
    <Modal v-model="countdownModal"  title="查询执行中，5秒后自动返回" :closable="false" :footer-hide="true"
      class-name="vertical-center-modal">
      <div align="center">

        <!-- <div>查询执行中，5秒后自动返回</div> -->
        <Circle :percent="percent" :stroke-color="color" size="200" 
        style="margin:center;text-align: center;text-align:center;">
        <Icon v-if="percent == 100" type="ios-checkmark" size="100" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ (5 * 20 - percent) / 20 }}</span>
        </Circle>
      </div>
    </Modal>


    <ButtonGroup size="large">
        <Button icon="ios-add" @click="countdown">倒计时</Button>
        <!-- <Button icon="ios-remove" @click="minus"></Button> -->
        <!-- 控制按钮是否可点击 -->
        <Button icon="ios-query" @click="query" :disabled="queryBtnDisabled" >查询</Button>
    </ButtonGroup>
</div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0,
                queryBtnDisabled: false,
                countdownModal: false
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            query () {
               this.queryBtnDisabled = true;
               this.countdownModal = true;
               //触发倒计时函数
                setTimeout(() => {
                    this.doCountdown();
                }, 1000);
            },
            doCountdown(){
              if(this.percent < 100){
                this.countdown();
                setTimeout(() => {
                    this.doCountdown();
                }, 1000);
              }else{
                //重新启用查询按钮
                this.queryBtnDisabled = false;
                this.percent = 0;
                //关闭对话框
                this.countdownModal = false;
              }
            },
            countdown () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 20;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 20;
            }
        }
    }
</script>