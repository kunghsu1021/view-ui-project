<style scoped lang="less">
</style>
<template>
  <div>
    <h1>demo1页面</h1>
    <!--
            这个<template>下的内容就是 template模式渲染的，所以iview的组件可以用大写字母开头
                为什么是template模式？
                因为这个文件将会被webpack+vue当成单文件组件导出，当成模板来渲染
         -->
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br /><br />
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>
<script>
export default {
  name: "demo1",
  methods: {},
};
</script>
