<template>
  <!-- 表单验证 #
Form 组件基于  async-validator 实现的数据验证，给 Form 设置属性 rules，
同时给需要验证的 FormItem 设置属性 prop 指向对应字段即可。

完整的验证规则请参照开源项目 async-validator。
验证方法也支持 Promise。 -->
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="Name" prop="name">
      <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="mail">
      <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
    </FormItem>
    <FormItem label="City" prop="city">
      <Select v-model="formValidate.city" placeholder="Select your city">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem label="Date">
      <Row>
        <Col span="11">
        <FormItem prop="date">
          <DatePicker type="date" placeholder="Select date" v-model="formValidate.date">
          </DatePicker>
        </FormItem>
        </Col>
        <Col span="2" style="text-align: center">-</Col>
        <Col span="11">
        <FormItem prop="time">
          <TimePicker type="time" placeholder="Select time" v-model="formValidate.time">
          </TimePicker>
        </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="Gender" prop="gender">
      <RadioGroup v-model="formValidate.gender">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Hobby" prop="interest">
      <CheckboxGroup v-model="formValidate.interest">
        <Checkbox label="Eat"></Checkbox>
        <Checkbox label="Sleep"></Checkbox>
        <Checkbox label="Run"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" prop="desc">
      <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
        placeholder="Enter something..."></Input>
    </FormItem>

    <!-- 日期组件  面板不联动 #
开启属性 split-panels 后，左右两面板在切换年、月时不联动。 -->
    <FormItem label="daterange" prop="daterange">
      <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"
        v-model="formValidate.daterange"></DatePicker>
    </FormItem>

    <!-- 原本双向绑定的属性只能接收date类型，用了on-change方法之后，可以直接将字符串赋值给formValidate.datetimerange
        例如下面 formValidate.datetimerange是一个字符串数组 -->
    <FormItem label="datetimerange" prop="datetimerange">
      <DatePicker type="datetimerange" split-panels placeholder="Select date" :options="dateOptions"
        format="yyyy-MM-dd HH:mm:ss" style="width: 400px" :start-date="new Date()"
        @on-change="formValidate.datetimerange=$event" v-model="formValidate.datetimerange">
      </DatePicker>
    </FormItem>

    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
        
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: '',
        daterange: null,
        datetimerange: null //这个对象将被赋值成数组 第一个元素表示起始时间，第二个元素表示终止时间 值是 Date 类型
      },
      //这里定义了一个验证规则对象，名字随意，负责和表单的rule属性做双向绑定
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      },
      dateOptions: {
          //设置哪些天不能选
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now();
                    }
                }
    }
  },
  methods: {
    handleSubmit(name) {
      console.log(this.formValidate.datetimerange);

      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset(name) {
      //重置表单
      this.$refs[name].resetFields();
    }
  }
}
</script>
