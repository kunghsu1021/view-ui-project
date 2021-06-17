<template>
  <!-- 本例基于ivew的Menu组件+Tabs组件实现一个左侧菜单右边不变的效果。 -->
  <layout>
                <Header>
                        <div>
                            <Icon type="navicon-round" size="24"></Icon>
                            <span style="font-size:18px;font-weight:bold;color: #d8ff00c4;">后台管理系统Index3</span>
                           <Button type="text" icon="android-exit" @click="quit" 
                           style="float: right;color: #fafd4a;">退出系统</Button>
                        </div>
                            <!-- <Button type="text" icon="person" size="large">个人中心</Button>
                            <Button type="text" icon="android-notifications" size="large" @click="clickNotice">消息通知</Button> -->
                </Header>

  <div class="my-div">
      <!-- <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed"> -->
    <Menu
       class="my-menu"
      :theme="mytheme"
      active-name="1-2"
      :open-names="['1']"
      @on-select="select($event)">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics" />
          testmenu1
        </template>
        <MenuGroup title="菜单组1">
          <MenuItem name="dynamic1">Option 1</MenuItem>
          <MenuItem name="dynamic2">Option 2</MenuItem>
          <MenuItem name="dynamic3">Option 3</MenuItem>
          <MenuItem name="dynamic4">Option 4</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-filing" />
          testmenu2
        </template>
        <!-- MenuGroup不是必须的,假如你希望给某些菜单项分类的时候再用MenuGroup -->
        <MenuItem name="2-1">Option 5</MenuItem>
        <MenuItem name="2-2">Option 6</MenuItem>
      </Submenu>
    </Menu>
    <!-- </sider> -->
    <Tabs
      type="card"
      closable
      @on-tab-remove="handleTabRemove"
      @on-contextmenu="handleContextMenu"
    >
      <!-- 遍历自定义的tabs数组进行渲染 -->
      <template v-for="tab in tabs">
      <TabPane
        ref="tabPanes"
        :key="tab.component"
        :name="tab.component"
        :label="tab.component"
        v-if="tab.display"
        context-menu>
        <!-- component标签可以直接引入一个组件，一个组件就是一个页面 -->
        <component ref="tabComponents" :is="tab.component"></component>
      </TabPane>
      </template>
      <template slot="contextMenu">
        <DropdownItem @click.native="closeOtherTabs">关闭其他</DropdownItem>
        <DropdownItem @click.native="closeAllTabs" style="color: #ed4014">关闭所有</DropdownItem>
      </template>
      <Button @click="closeAllTabs" size="small" slot="extra">关闭所有</Button>
    </Tabs>
  </div>

  </layout>

</template>

<script>
import Vue from "vue";
// import vuetabs from "vue-nav-tabs"; //npm install vue-nav-tabs  npm install babel-helper-vue-jsx-merge-props
// import boostrapvue from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import "iview/dist/styles/iview.css";
// import iview from "iview";
import dynamic1 from "../../components/dynamicComponent1.vue";
import dynamic2 from "../../components/dynamicComponent2.vue";
import dynamic3 from "../../components/dynamicComponent3.vue";
import dynamic4 from "../../components/dynamicComponent4.vue";
// import dynamic4 from "@/components/dynamicComponent4.vue";

Vue.component("dynamic1", dynamic1);
Vue.component("dynamic2", dynamic2);
Vue.component("dynamic3", dynamic3);
Vue.component("dynamic4", dynamic4);

// Vue.use(boostrapvue);
// Vue.use(iview);

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tabs: [
        // 初始的tabs 为空
      ],
      contextData: null,
      mytheme: "dark", //设置自带的主题 默认是两个选择：light 或者 dark
    };
  },
  methods: {
    handleContextMenu(data) {
      this.contextData = data;
    },
    closeOtherTabs() {
        let index;
        var thiz = this;
        let newTabs = [];
      this.tabs.forEach(function (element) {
        if (element.component == thiz.contextData.name) {
                newTabs.push(element);
        }
      });
      //删除后
      this.tabs = newTabs;
      console.log(this.tabs);
    },
    handleContextMenuDelete() {
      this.$Message.info("Click delete of " + this.contextData.name);
    },
    handleTabRemove(name) {
      // 移除标签的动作
      console.log(name);
      console.log(this.tabs);
      var thiz = this;
      var index;
      this.tabs.forEach(function (element) {
        if (element.component == name) {
          index = thiz.tabs.indexOf(element);
          element.display = false;
        }
      });
      console.log(index); // 找到index 并将tabs里的内容删除
      this.tabs.splice(index, 1);
      console.log(this.tabs);
    },

    select(event) {
      // 当选择某个菜单时
      console.log(this);
      //要打开的组件（页面）是否已经在tabs中存在
      var componentexist = false;

      if (this.tabs.length == 0) {
        this.tabs.push({ display: true, component: event });
        return;
      } else {
        console.log(this.$refs.tabPanes[0].$parent);
      }

      var thiz = this; //因为forEach里不支持直接用this,所以先获取this的引用
      this.$refs.tabPanes.forEach(function (element) {
        if (element.name == event) {
          componentexist = true;
          //设置当前展示的tab页
          thiz.$refs.tabPanes[0].$parent.activeKey = event;
          //element.display = true
          return;
        }
      });

      if (!componentexist) {
        //未存在，新增内容到tabs
        this.tabs.push({ display: true, component: event });
        //设置新增的这个tab为展示状态
        this.$refs.tabPanes[0].$parent.activeKey = event;
      }
    },
    open() {
      console.log(this);
    },
    closeAllTabs() {
      //直接把数组置成空，就是关闭所有
      this.tabs = [];
    },
    quit() {

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ivu-menu {
  float: left;
}

.ivu-tabs {
  margin-top: 20px;
  padding-left: 20px;
}

.my-menu{
    height: 100%;
    height: 800px;
}
.my-div{
    height: 100%;
    width: 100%;
}
</style>