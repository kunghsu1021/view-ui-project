<template>
<div>
<!-- 
  基础用法 #
基本使用方法，有四种样式可以选择info、success、warning、error。 -->

    <Alert>An info prompt</Alert>
    <Alert type="success">A success prompt</Alert>
    <Alert type="warning">A warning prompt</Alert>
    <Alert type="error">An error prompt</Alert>

    <br><br><br>

<!-- 含描述信息 #
自定义<slot name="desc">描述内容。 -->
    <Alert>
        An info prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="success">
        A success prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="warning">
        A warning prompt
        <template slot="desc">
        Content of prompt. Content of prompt. Content of prompt.
    </template>
    </Alert>
    <Alert type="error">
        An error prompt
        <span slot="desc">
            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>
    <br><br><br>

<!-- 顶部公告 #
设置属性 banner 可以应用顶部公告的样式。 -->
<Alert banner type="warning">Notice: notification contents...</Alert>
<Alert banner closable type="warning">Notice: notification contents...</Alert>
    <br><br><br>


    <br><br><br>
<Alert banner closable type="warning">{{app_url}}</Alert>

    </div>
</template>
<script>
export default {
        data () {
            return {
                app_url: ""
            }
        },
        methods: {
            changeLimit () {
                if(process.env.NODE_ENV == "production"){
                    this.app_url = "production";
                }else if(process.env.NODE_ENV == "dev"){
                    this.app_url = "dev";
                }else if(process.env.NODE_ENV == "uat"){
                    this.app_url = "uat";
                }else {
                    //
                    this.app_url = "nothing";
                }
                console.log(process.env.NODE_ENV);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>
