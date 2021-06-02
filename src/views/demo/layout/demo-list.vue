<template>
<div>
<!--     每一个item里应该有什么？
    1.步骤名
    2.多选框，选发送目标 -->
    <List item-layout="vertical">
        <ListItem v-for="(item, index) in data" :key="index" >
            <ListItemMeta  :title="item.title" />
<!--            
     {{ item.content }}
 -->            
 <!-- 定义一个多选框 -->
    <template>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :indeterminate="item.indeterminate"
            :value="item.checkAll"
            @click.prevent.native="handleCheckAll(index)">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="item.checkAllGroup" @on-change="checkAllGroupChange">
<!--         
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox> 
        :value="item.id"
        -->
         <Checkbox v-for="item2 in item.checkArray" :key="item2.id"  :label="item2.name"></Checkbox>
    </CheckboxGroup>
    </template>
        </ListItem>
    </List>

</div>
</template>
<script>
    export default {
        data () {
            return {
                
                data: [
                    {
                        title: '步骤1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        checkArray: [
                            {id:"dx", name:"短信"},
                            {id:"wx", name:"微信"},
                            {id:"zfb", name:"支付宝"},
                            {id:"dy", name:"电邮"},
                            {id:"sjqq", name:"手机QQ"}
                        ],
                        checkAllGroup: [],//'短信', '微信'
                        indeterminate: true,
                        checkAll: false
                    },
                    {
                        title: '步骤2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        checkArray: [
                            {id:"dx", name:"短信"},
                            {id:"wx", name:"微信"},
                            {id:"zfb", name:"支付宝"},
                            {id:"dy", name:"电邮"},
                            {id:"sjqq", name:"手机QQ"}
                        ],
                        checkAllGroup: [],//'短信', '微信'
                        indeterminate: true,
                        checkAll: false
                    },
                    {
                        title: '步骤3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        checkArray: [
                            {id:"dx", name:"短信"},
                            {id:"wx", name:"微信"},
                            {id:"zfb", name:"支付宝"},
                            {id:"dy", name:"电邮"},
                            {id:"sjqq", name:"手机QQ"}
                        ],
                        checkAllGroup: [],//'短信', '微信'
                        indeterminate: true,
                        checkAll: false
                    }
                ]
            }
        },
        methods: {
            handleCheckAll (index) {
                console.log("索引：" + index);
                if (this.data[index].indeterminate) {
                    this.data[index].checkAll = false;
                } else {
                    this.data[index].checkAll = !this.data[index].checkAll;
                }
                this.data[index].indeterminate = false;

                if (this.data[index].checkAll) {
                    console.log('开始设置全选');
                    //设置全选，把整个数组赋予给checkAllGroup就是全选了
                    var allArray = [];
                    if(this.data[index].checkArray && this.data[index].checkArray.length > 0){
                        for(var j = 0; j < this.data[index].checkArray.length; j++) {
                            allArray.push(this.data[index].checkArray[j].name);
                        } 
                    }
                    //checkAllGroup这里只接受label,不能赋予其他属性，所以需要将label组织成一个数组赋值进去
                    this.data[index].checkAllGroup = allArray;
                } else {
                    this.data[index].checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {//多选框选中事件
                // if (data.length === 3) {
                //     this.indeterminate = false;
                //     this.checkAll = true;
                // } else if (data.length > 0) {
                //     this.indeterminate = true;
                //     this.checkAll = false;
                // } else {
                //     this.indeterminate = false;
                //     this.checkAll = false;
                // }
            }
        }
    }
</script>
