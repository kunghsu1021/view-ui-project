<template>
<div>
<!--     普通提示 #
最基本的提示，默认在1.5秒后消失。 -->
    <Button type="primary" @click="info">Display info prompt</Button>

        <br><br><br>
<!-- 提示类型 #
不同的提示状态：成功、警告、错误。 -->
<Button @click="success">Display success prompt</Button>
    <Button @click="warning">Display warning prompt</Button>
    <Button @click="error">Display error prompt</Button>

    <br><br><br>

<!--     带背景色 #
4.0.0
 设置属性 background 后，通知提示会显示背景色。 -->

     <div>
        <Button @click="background('info')">显示普通提示</Button>
        <Button @click="background('success')">显示成功提示</Button>
        <Button @click="background('warning')">显示警告提示</Button>
        <Button @click="background('error')">显示错误提示</Button>
    </div>

    <br><br><br>

<!--     加载中 #
Loading 的状态，并异步在某个时机移除。 -->
<Button @click="loading">Display loading...</Button>
<Button @click="closeLoading">手动主动 loading...</Button>

    <br><br><br>
    <br><br><br>
    <br><br><br>

</div>
</template>
<script>
    export default {
        methods: {
            /**
             * this.$Message是一个全局的组件
             */
            info () {
                this.$Message.info('This is a info tip');
            },
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            },
            background (type) {
                //background可以指定背景色
                this.$Message[type]({
                    background: true,
                    content: '这是一条带背景色的通知'
                });
            },
            loading () {
                //弹出一个加载中的提示框
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                //三秒后移除这个提示框，假如不执行下面这句，提示框将一直保留
                setTimeout(msg, 3000);
                
            },
            closeLoading() {
                //上面定义的msg其实是一个函数(但是上面的定义是一种局部定义，它的作用域只局限在函数内)
                //所以在这里调用是没用的
                this.msg();
            }
        }
    }
</script>
