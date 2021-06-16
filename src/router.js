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
            },            
            {
                path: '/layout/demo-list', //layout测试页面3
                meta: {
                    title: 'demo-list'
                },
                component: (resolve) => require(['./views/demo/layout/demo-list.vue'], resolve)
            },
            {
                
                path: '/layout/demo-collapse', //layout测试页面3
                meta: {
                    title: 'demo-collapse'
                },
                component: (resolve) => require(['./views/demo/layout/demo-collapse.vue'], resolve)
            },
            {
                
                path: '/layout/demo-split', //layout测试页面3
                meta: {
                    title: 'demo-split'
                },
                component: (resolve) => require(['./views/demo/layout/demo-split.vue'], resolve)
            },
            {
                
                path: '/layout/demo-cell', //layout测试页面-cell
                meta: {
                    title: 'demo-cell'
                },
                component: (resolve) => require(['./views/demo/layout/demo-cell.vue'], resolve)
            }
        ]

    },
    {
        //定义一个父子路由
        path: '/navigation',
        component: (resolve) => require(['./views/demo/navigation/navigation-router.vue'], resolve),
        children:[
            {
                path: '/navigation/demo-menu', //navigation测试页面1
                meta: {
                    title: 'demo-menu'
                },
                component: (resolve) => require(['./views/demo/navigation/demo-menu.vue'], resolve)
            },
            {
                path: '/navigation/demo-tabs', //navigation测试页面2
                meta: {
                    title: 'demo-tabs'
                },
                component: (resolve) => require(['./views/demo/navigation/demo-tabs.vue'], resolve)
            },
            {
                path: '/navigation/demo-dropdown', //navigation测试页面dropdown
                meta: {
                    title: 'demo-dropdown'
                },
                component: (resolve) => require(['./views/demo/navigation/demo-dropdown.vue'], resolve)
            },
            {
                path: '/navigation/demo-page', //navigation测试页面page
                meta: {
                    title: 'demo-page'
                },
                component: (resolve) => require(['./views/demo/navigation/demo-page.vue'], resolve)
            }
            
        ]

    },
    {
        //定义一个父子路由
        path: '/form',
        component: (resolve) => require(['./views/demo/form/form-router.vue'], resolve),
        children:[
            {
                path: '/form/demo-form1', //form测试页面1
                meta: {
                    title: 'demo-form1'
                },
                component: (resolve) => require(['./views/demo/form/demo-form1.vue'], resolve)
            },
            {
                path: '/form/demo-form2', //form测试页面1
                meta: {
                    title: 'demo-form2'
                },
                component: (resolve) => require(['./views/demo/form/demo-form2.vue'], resolve)
            },
            {
                path: '/form/demo-form3', //form测试页面1
                meta: {
                    title: 'demo-form3'
                },
                component: (resolve) => require(['./views/demo/form/demo-form3.vue'], resolve)
            },
            {
                path: '/form/demo-form4', //form测试页面1
                meta: {
                    title: 'demo-form4'
                },
                component: (resolve) => require(['./views/demo/form/demo-form4.vue'], resolve)
            },
            {
                path: '/form/demo-upload', //form测试页面1
                meta: {
                    title: 'demo-upload'
                },
                component: (resolve) => require(['./views/demo/form/demo-upload.vue'], resolve)
            },
            {
                path: '/form/demo-table1', //form测试页面1
                meta: {
                    title: 'demo-table1'
                },
                component: (resolve) => require(['./views/demo/form/demo-table1.vue'], resolve)
            },
            {
                path: '/form/demo-table2', //form测试页面1
                meta: {
                    title: 'demo-table2'
                },
                component: (resolve) => require(['./views/demo/form/demo-table2.vue'], resolve)
            },
            {
                path: '/form/demo-table3', //form测试页面1
                meta: {
                    title: 'demo-table3'
                },
                component: (resolve) => require(['./views/demo/form/demo-table3.vue'], resolve)
            }
            
        ]

    },
    {
        //定义一个父子路由
        path: '/view',
        component: (resolve) => require(['./views/demo/view/view-router.vue'], resolve),
        children:[
            {
                path: '/view/demo-alert', //form测试页面1
                meta: {
                    title: 'demo-alert'
                },
                component: (resolve) => require(['./views/demo/view/demo-alert.vue'], resolve)
            },
            {
                path: '/view/demo-message', //form测试页面1
                meta: {
                    title: 'demo-message'
                },
                component: (resolve) => require(['./views/demo/view/demo-message.vue'], resolve)
            },
            {
                path: '/view/demo-modal', //form测试页面1
                meta: {
                    title: 'demo-modal'
                },
                component: (resolve) => require(['./views/demo/view/demo-modal.vue'], resolve)
            }
        ]

    },
    {
        //定义一个父子路由
        path: '/demo2',
        component: (resolve) => require(['./views/demo2/index2.vue'], resolve),
        children:[
            {
                path: '/demo2/page1',
                meta: {
                    title: 'demo2-page1'
                },
                component: (resolve) => require(['./views/demo2/page1.vue'], resolve)
            },
            {
                path: '/demo2/page2',
                meta: {
                    title: 'demo2-page2'
                },
                component: (resolve) => require(['./views/demo2/page2.vue'], resolve)
            }
        ]

    }
];
/**
 * 导出路由数组，提供给其他文件进行导入
 * 注意，这只是一个数组。后续还要根据这个数组创建出vue的VueRouter对象，才算初始化好项目的路由
 */
export default routers;