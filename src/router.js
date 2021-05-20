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
    },
    {
        //定义一个父子路由
        path: '/layout',
        component: (resolve) => require(['./views/demo/layout/layout-router.vue'], resolve),
        children:[
            {
                path: '/layout/demo-layout1', //layout测试页面1
                meta: {
                    title: 'demo-layout1'
                },
                component: (resolve) => require(['./views/demo/layout/demo-layout1.vue'], resolve)
            },
            {
                path: '/layout/demo-layout2', //layout测试页面2
                meta: {
                    title: 'demo-layout2'
                },
                component: (resolve) => require(['./views/demo/layout/demo-layout2.vue'], resolve)
            },
            {
                path: '/layout/demo-card', //layout测试页面3
                meta: {
                    title: 'demo-card'
                },
                component: (resolve) => require(['./views/demo/layout/demo-card.vue'], resolve)
            }
        ]

    }
];
/**
 * 导出路由数组，提供给其他文件进行导入
 * 注意，这只是一个数组。后续还要根据这个数组创建出vue的VueRouter对象，才算初始化好项目的路由
 */
export default routers;