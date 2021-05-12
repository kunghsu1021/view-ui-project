/**
 * 定义路由数组
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/demo1', //测试页面1
        meta: {
            title: 'demo1'
        },
        component: (resolve) => require(['./views/demo/demo1.vue'], resolve)
    },
    {
        path: '/demo-layout', //测试页面1
        meta: {
            title: 'demo-layout'
        },
        component: (resolve) => require(['./views/demo/demo-layout.vue'], resolve)
    }
];
/**
 * 导出路由数组，提供给其他文件进行导入
 * 注意，这只是一个数组。后续还要根据这个数组创建出vue的VueRouter对象，才算初始化好项目的路由
 */
export default routers;