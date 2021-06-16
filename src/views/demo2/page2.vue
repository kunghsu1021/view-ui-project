<template>
<div>

        <Alert type="success">我是page2</Alert>
        <Alert type="success">我是page2</Alert>
        <Alert type="success">我是page2</Alert>
        <Alert type="success">我是page2</Alert>

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
