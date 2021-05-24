<template>
<div>

<!-- 基础用法 #
表格的最简单用法。 -->
    <Table :columns="columns1" :data="data1"></Table>
    <Button type="primary" @click="changeTable1Data" >changeTable1Data</Button>

    <br><br><br>

<!-- 斑马纹 #
设置属性 stripe ，表格会间隔显示不同颜色，用于区分不同行数据。 -->
        <Table stripe :columns="columns1" :data="data1"></Table>

    <br><br><br>

<!-- 带边框 #
添加表格的边框线。
 -->
    <Table border :columns="columns1" :data="data1"></Table>
    <br><br><br>

<!-- 固定表头 #
通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。

3.4.0 版本后也可以设置 max-height 属性。 -->
    <Table height="200" :columns="columns1" :data="data1"></Table>
    <br><br><br>

<!-- 固定列 #
通过给数据 columns 的项设置 fixed 为 left 或 right，可以左右固定需要的列。当横向内容过多时可以使用。 -->
<Table width="550" border :columns="columns2" :data="data3"></Table>
    <br><br><br>

    <br><br><br>

    <br><br><br>

</div>
</template>
<script>
    export default {
        data () {
            return {
                //定义表格的列
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                /**
                 * 定义表格的数据源
                 * 一个数据源可以给多个表格共用！！！
                 */
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left' //设置 fixed 为 left 或 right，可以左右固定需要的列。当横向内容过多时可以使用。
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right', //设置 fixed 为 left 或 right，可以左右固定需要的列。当横向内容过多时可以使用。
                        width: 120,
                        render: (h, params) => {
                            //这里传入的params就是当前行数据
                            //假如希望携带某些信息，可以将这些信息传入到Button的事件函数里
                            //有问题，这里怎么拿不到数据？ 
                            //必须要用params.row才表示拿到当前行
                            console.log("进入render", params.row.name);
                            console.log("进入render", h);
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
            }
        },
        methods: {
            changeTable1Data () {
                //改变表格的数据，因为是双向绑定，只要改变了这个数组，页面就会响应显示成新数组
                this.data1 = [
                    {
                        name: '洛杉矶湖人',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: '休斯顿火箭',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    }
                ]
            }
        }
    }
</script>
