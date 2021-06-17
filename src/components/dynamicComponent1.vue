<template>
<div>
    <h1>展示echart的折线图例子</h1>
    <!-- 确认对话框 #
快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。 -->
    <Button @click="confirm">Normal</Button>
    <Button @click="custom">Custom button text</Button>
    <Button @click="async">Asynchronous closing</Button>
</div>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    cancelText: 'Cancel',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    }
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('Asynchronously close the dialog box');
                        }, 2000);
                    }
                });
            }
        }
    }
</script>
