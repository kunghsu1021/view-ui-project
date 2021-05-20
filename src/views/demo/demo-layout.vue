<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <!-- 一个页面通常一个布局就够用了，只需要一个Layout控件
        然后在Layout控件里去划分区域 -->
        <Layout>
            <!-- 非常典型的上中下布局
                Header表示头部
                Content表示中间
                Footer表示底部
                 -->
            <Header>
                <!-- 头部通常放一个菜单
                     Menu组件
                     horizontal表示水平的菜单-->
                <Menu mode="horizontal" theme="dark" active-name="1">
                   <div class="layout-logo">
                    <h5 style="color:red">消息推送控制系统</h5>
                    </div>
                    <!-- layout-nav表示具体的菜单项
                    假如文字太长，这个菜单项会跑到第二行，样式问题留待后续解决 -->
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            策略配置
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            模板
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            规则
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            报表
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <!-- Breadcrumb是一个导航菜单-->
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <!-- Card是一个卡片，类似一张卡片一样的元素-->
                <Card>
                    <div style="min-height: 200px;">
                        Content
                        <br>
                        最基本的『上-中-下』布局。

一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。
通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；
上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。
页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。
此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
                    </div>
                </Card>
              
              <!-- 可以定义多个卡片 -->
    <Card style="width:320px">
        <div style="text-align:center;width:320px;height:240px">
            <img src="../../images/logo.png" style="text-align:center;width:300px;height:240px" >
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </Card>

<!-- 
    无边框 #
通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。
    禁用悬停阴影 #
通过设置属性dis-hover来禁用鼠标悬停显示阴影的效果。
    卡片阴影 #
通过设置属性shadow来显示卡片阴影，使用该属性后，bordered和dis-hover将无效，建议在灰色背景下使用。
-->
        <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <!-- 可以为一个卡片设置标题 -->
                <p slot="title">湖人队</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">快船队</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
    </Row>

            </Content>
            <Footer class="layout-footer-center">2021-9999 &copy; kunghsu</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        
    }
</script>