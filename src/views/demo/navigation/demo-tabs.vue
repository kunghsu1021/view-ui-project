<template>
<!--     基础用法 #
value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，
name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。 -->
    <div>
        <!-- Tabs表示一个标签组，TabPane表示其中一个标签面板 -->
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>
<!-- 禁用 #
禁用某一项。 -->

    <Tabs>
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二" disabled>标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>
<!-- 图标 #
通过设置属性 icon，可以显示一个图标。 -->
    <Tabs>
        <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>
<!-- 迷你型 #
设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。 -->
    <Tabs size="small">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>
<!--     卡片样式 #
设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。 -->
<Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>
<!-- 可关闭 #
通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。

需结合 @on-tab-remove 事件手动关闭标签页。 
例子：@on-tab-remove="handleTabRemove" 这个是必须要有的
假如没有这个，你会发现标签头虽然被关闭了，但是标签体TabPane的内容还在-->
<Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>

<!-- 自定义标签页 #
设置 label 为 Render 函数后，可以自定义标签页的内容。

 学习 Render 函数的内容 -->
<Tabs value="name1">
        <TabPane :label="label" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>
<!-- 附加内容 #
设置 slot extra 可以在页签右边添加附加操作。 -->
<Tabs type="card">
    <!-- tabs只是一个数字，循环渲染标签体
        用label属性来指定标签头
        标签体里有什么内容？
        在TabPane标签里指定的就是标签体的内容 -->
        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
    </Tabs>

    <br>
    <br>
    <br>
<!-- 不使用动画 #
通过设置属性 animated 为 false 可以禁用动画。
 -->
  <Tabs :animated="false">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
    <br>
    <br>
    <br>

<!--     右键菜单 #
4.3.0
 TabPane 开启属性 context-menu，可以配合 slot contextMenu 实现点击右键弹出菜单。
 注意，这个是4.3版本的新功能，我用的是4.0.还没有这个功能
  -->
<Tabs type="card" @on-contextmenu="handleContextMenu">
        <TabPane label="标签一" name="tab1" context-menu>标签一的内容</TabPane>
        <TabPane label="标签二" name="tab2" context-menu>标签二的内容</TabPane>
        <TabPane label="标签三" name="tab3" context-menu>标签三的内容</TabPane>
        <template slot="contextMenu">
            <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
            <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
        </template>
    </Tabs>
    <br>
    <br>
    <br>

<!-- 拖拽调整页签顺序 #
4.3.0
 开启属性 draggable，并配合事件 @on-drag-drop 可以实现拖拽调整页签顺序。 -->
 <Tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
        <TabPane v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name">{{ tab.label }}</TabPane>
    </Tabs>
    <br>
    <br>
    <br>

    </div>

</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true,
                //用一个函数来渲染标签头的样式，函数名随意
                label: (h) => {
                    //渲染一个消息提醒的label
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 300 //当超过99了，会默认只显示99+
                            }
                        })
                    ])
                },
                tabs: 2, //标签组的个数
                contextData: null,
                tabList: [
                    {
                        label: '标签一',
                        name: 'name1'
                    },
                    {
                        label: '标签二',
                        name: 'name2'
                    },
                    {
                        label: '标签三',
                        name: 'name3'
                    },
                    {
                        label: '标签四',
                        name: 'name4'
                    },
                    {
                        label: '标签五',
                        name: 'name5'
                    }
                ]
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
                //这里拿到的name其实就是序号而已！并不是具体的name
                console.log(name);
            },
             handleTabsAdd () {
                this.tabs ++;
            },
            handleContextMenu (data) {
                this.contextData = data;
            },
            handleContextMenuEdit () {
                this.$Message.info('Click edit of ' + this.contextData.name);
            },
            handleContextMenuDelete () {
                this.$Message.info('Click delete of ' + this.contextData.name);
            },
            handleDragDrop (name, newName, a, b, names) {
                // names 为调整后的 name 集合
                this.tabList.splice(b,1,...this.tabList.splice(a, 1 , this.tabList[b]));
            }
        }
    }
</script>