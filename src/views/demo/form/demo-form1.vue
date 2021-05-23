<template>
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
                }
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
            }
        }
    }
</script>
