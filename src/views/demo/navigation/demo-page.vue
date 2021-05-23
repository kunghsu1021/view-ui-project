<template>
<div>

<!-- 基本 #
基本的分页，页数过多时会自动折叠。 -->
    <Page :total="100" />
    <br>
    <br>
    <br>

<!-- 每页数量 #
可以切换每页显示的数量。 -->
 <Page :total="10000" show-sizer />
    <br>
    <br>
    <br>

<!-- 电梯 #
快速跳转到某一页。 -->
<Page :total="1100" show-elevator />

        <br>
    <br>
    <br>
<!-- 总数 #
显示总共多少条数据，接受 slot 来自定义内容，默认显示共{{ total }}条 -->
<Page :total="100" show-total />
        <br>
    <br>
    <br>
<!-- 迷你型 #
设置size为small使用迷你型，迷你型拥有普通的所有功能。 -->
 <Page :total="40" size="small" />
    <Page :total="40" size="small" show-elevator show-sizer />
    <Page :total="40" size="small" show-total />
        <br>
    <br>
    <br>
<!-- 简洁 #
设置simple属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，
或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。 -->
    <Page :current="2" :total="50" simple />
        <br>
    <br>
    <br>
<!-- 上一页和下一页 #
使用属性 prev-text 和 next-text，替代图标显示为文字。 -->
<Page :total="100" prev-text="Previous" next-text="Next" />
            <br>
    <br>
    <br>

            <br>
    <br>
    <br>

</div>
</template>
<script>
    export default {
        
    }
</script>
