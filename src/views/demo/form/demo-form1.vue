<template>
<div>

<!-- 行内表单 #
设置属性 inline，表单元素可以水平排列。
inline
默认是垂直排列 -->
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <!-- 用FormItem定义表单项 -->
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>

        <br><br><br>
<!-- 基础用法 #
基本用法，通过 data 设置自动完成的数据源。 -->
<AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="handleSearch1"
        placeholder="input here"
        style="width:200px"></AutoComplete>

<!-- 查询模式 #
完全自定义 Option，显示复杂的布局。 -->
        <br><br><br>
        
<AutoComplete
        v-model="value4"
        icon="ios-search"
        placeholder="input here"
        style="width:300px">
        <div class="demo-auto-complete-item" v-for="item in data4" v-bind:key="item.title">
            <div class="demo-auto-complete-group">
                <span>{{ item.title }}</span>
                <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
            </div>
            <Option v-for="option in item.children" :value="option.title" :key="option.title">
                <span class="demo-auto-complete-title">{{ option.title }}</span>
                <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
            </Option>
        </div>
        <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
    </AutoComplete>

</div>

</template>
<script>
    export default {
        data () {
            return {
                //这里定义的对象就是和表单做双向绑定的
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                },
                value1: '',
                data1: [], //AutoComplete组件使用的数组，展示到下拉的选项里
                value4: '',
                data4: [
                    {
                        title: '话题',
                        children: [
                            {
                                title: 'iView',
                                count: 10000,

                            },
                            {
                                title: 'iView UI',
                                count: 10600,

                            }
                        ]
                    },
                    {
                        title: '问题',
                        children: [
                            {
                                title: 'iView UI 有多好',
                                count: 60100,

                            },
                            {
                                title: 'iView 是啥',
                                count: 30010,

                            }
                        ]
                    },
                    {
                        title: '文章',
                        children: [
                            {
                                title: 'iView 是一个设计语言',
                                count: 100000,

                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            /**
             * 这里传入的入参就是表单的ref属性
             * 通常也用来表示一个表单的名字
             * 本例子中就是formInline
             */
            handleSubmit(name) {
                //this.$refs[name]这里拿到的就是整个表单对象
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //校验通过
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleSearch1 (value) {
                //每当输入值，就触发这个函数，刷新下拉选项列表
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>
