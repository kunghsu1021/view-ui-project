/**
 * 这是入口文件，webpack会指定这个文件，指定的位置在：webpack.base.config.js
 */
import Vue from 'vue';
import ViewUI from 'view-design';
import VueRouter from 'vue-router';
import Routers from './router';//自定义路由，也是iview demo工程自动提供的
import Util from './libs/util';
import App from './app.vue';//引入首页组件，表示网站的入口
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter);//加载路由组件
Vue.use(ViewUI);//加载ViewUI组件

// 路由配置
const RouterConfig = {
    mode: 'history',
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
    el: '#app',
    router: router,
    render: h => h(App)
});
