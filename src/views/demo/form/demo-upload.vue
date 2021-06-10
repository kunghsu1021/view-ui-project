<template>
<div>
<!-- 这是一个上传控件 
    用action指定url进行上传，这里会存在跨域问题，springboot后端必须配合做修改
    使用Upload组件时，不需要依赖Ajax或者axios,组件里自带了请求接口的逻辑，非常方便
    默认向后台发起的是POST请求
    on-success： 文件上传成功时的钩子，返回字段为 response, file, fileList	-->
    <Upload :action="uploadUrl" :on-success="handleSuccess">
        <Button icon="ios-cloud-upload-outline">上传文件</Button>
    </Upload>

    <br>
    <h2>下面展示拖拽上传</h2>
    <Upload
        multiple
        type="drag"
        :action="uploadUrl">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>拖拽文件到此区域上传</p>
        </div>
    </Upload>
</div>
</template>
<script>
    export default {
        data () {
            return {
                uploadUrl: ""
            }
        },
        created: function (){
            //根据环境判断使用哪个url
            this.uploadUrl = "http://localhost:8080/kunsharedemo/springmvcdemo/upload";
        },
        methods: {
            handleSuccess (res, file) {
                console.log(res);//服务端的返回
                console.log(file);//已经上传的文件信息  
                // file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                // file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            }
        }
    }
</script>


