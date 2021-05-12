/**
 * 这是入口文件，webpack会指定这个文件，指定的位置在：webpack.base.config.js
 */
import Vue from 'vue';
import ViewUI from 'view-design';//引入iview的js
import VueRouter from 'vue-router';//引入vue的路由组件
import Routers from './router';//自定义路由，也是iview demo工程自动提供的
import Util from './libs/util';
import App from './app.vue';//引入首页组件，表示网站的入口
import 'view-design/dist/styles/iview.css';//引入iview的样式

Vue.use(VueRouter);//加载路由组件
Vue.use(ViewUI);//加载ViewUI组件

// 路由配置
const RouterConfig = {
    mode: 'history', //路由的模式，history:具有对url历史记录进行修改的功能
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app', //定义挂载点
    router: router,
    render: h => h(App) //默认渲染app组件，即首页组件
});
