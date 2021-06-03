<template>
<div>
<!--     每一个item里应该有什么？
    1.步骤名
    2.多选框，选发送目标 -->
    <List item-layout="vertical">
        <ListItem v-for="(item, index) in listData" :key="index" >
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
    <!-- 下面的on-change事件函数，假如不传参，默认会把选中的数组返回，假如传参，则不返回数组，返回的是你指定的参数 -->
    <CheckboxGroup v-model="item.checkAllGroup" @on-change="checkAllGroupChange(item.checkAllGroup, index)" >
<!--         
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox> 
        :value="item.id"
        -->
         <Checkbox v-for="item2 in item.checkArray" :key="item2.id"  :label="item2.name" border></Checkbox>
    </CheckboxGroup>
    </template>
        </ListItem>
    </List>

                     <Button @click="addStep">添加步骤</Button>
                    <Button @click="deleteStep">删除步骤</Button>

</div>
</template>
<script>
    export default {
        data () {
            return {
                count: 3,
                sourceCheckArray:[
                            {id:"dx", name:"短信"},
                            {id:"wx", name:"微信"},
                            {id:"zfb", name:"支付宝"},
                            {id:"dy", name:"电邮"},
                            {id:"sjqq", name:"手机QQ"}
                        ],
                listData: [ //展示List元素的数据源
                    {
                        title: '步骤1',
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
                if (this.listData[index].indeterminate) {
                    this.listData[index].checkAll = false;
                } else {
                    this.listData[index].checkAll = !this.listData[index].checkAll;
                }
                this.listData[index].indeterminate = false;

                if (this.listData[index].checkAll) {
                    console.log('开始设置全选');
                    //设置全选，把整个数组赋予给checkAllGroup就是全选了
                    var allArray = [];
                    if(this.listData[index].checkArray && this.listData[index].checkArray.length > 0){
                        for(var j = 0; j < this.listData[index].checkArray.length; j++) {
                            allArray.push(this.listData[index].checkArray[j].name);
                        } 
                    }
                    //checkAllGroup这里只接受label,不能赋予其他属性，所以需要将label组织成一个数组赋值进去
                    this.listData[index].checkAllGroup = allArray;
                } else {
                    this.listData[index].checkAllGroup = [];
                }
                this.checkAllGroupChange([], 0);
            },
            checkAllGroupChange (value,index) {//多选框选中事件
                console.log("checkAllGroupChange");
                console.log(value);
                console.log(index);

                var listDataItem = this.listData[index];
                //获取已选中的值，是一个数组
                var checkAllGroup = listDataItem.checkAllGroup;
                console.log(checkAllGroup);

                //因为上一步骤选中的元素，不能出现到下一个步骤中，所以需要从头开始遍历整个数组，逐个修改 checkArray 和 checkAllGroup
                //先用一个数组，记录已经被选中的项
                var hasChooseArray = [];
                // debugger;
                for(var i = 0; i < this.listData.length; i++) {
                     //获取当前的可选项
                    var checkArray = this.listData[i].checkArray;

                    //获取当前步骤所选中的值
                    if(hasChooseArray.length == 0){
                        //假如是零，说明当前是第一步或者上一步根本没勾选任何值，不用做处理
                        console.log(checkArray);
                    }else{
                        var newcheckArray = [];
                        checkArray.forEach(element => {
                            if(!hasChooseArray.includes(element.name)){
                                newcheckArray.push(element);
                            }
                        });
                        //将得到的新数组，赋予给当前的可选项数组
                        this.listData[i].checkArray = newcheckArray;
                        console.log("循环处理弟" + i + "个元素");
                        console.log(newcheckArray);
                        //checkArray变了，checkAllGroup也要修改！
                        var newCheckAllGroup = [];
                        var nameArray = [];//字符串数组, 记录只能出现的name集合
                        newcheckArray.forEach(element => {
                            nameArray.push(element.name);
                        });
                        //遍历当前选中的值集合（checkAllGroup是一个字符串数组）
                        for(var k = 0; k < this.listData[i].checkAllGroup.length; k++) {
                            if(!nameArray.includes(this.listData[i].checkAllGroup[k])){
                                continue;//过滤掉
                            }
                            newCheckAllGroup.push(this.listData[i].checkAllGroup[k]);
                        }
                        //重新设置checkAllGroup
                        this.listData[i].checkAllGroup = newCheckAllGroup;
                    }
                         //将当前步骤的选中项放到hasChooseArray中，给下一步骤判断
                    hasChooseArray = hasChooseArray.concat(this.listData[i].checkAllGroup);

                    //遍历源数组，获取hasChooseArray中不存在的，且this.listData[i].checkArray也不存在的，要进行回添
                    var needToAddArray = [];
                    var currentCheckArray = this.listData[i].checkArray;
                    this.sourceCheckArray.forEach(element => {
                            // debugger;
                            //currentCheckArray是一个对象数组
                            var isExist = false;
                            for(var k = 0; k < currentCheckArray.length; k++) {
                                if(currentCheckArray[k].name == element.name){
                                    isExist = true;
                                    break;
                                }
                            }
                            if(isExist){
                                //
                                return ;
                            }
                            //hasChooseArray是一个字符串数组
                            if(hasChooseArray.includes(element.name)){
                                return;
                            }
                            //假如sourceCheckArray中的元素，在hasChooseArray和checkArray都不存在，则重新添加2
                            needToAddArray.push(element);
                    });
                   console.log("needToAddArray" + needToAddArray);
                   this.listData[i].checkArray = this.listData[i].checkArray.concat(needToAddArray);
                }
            },
            addStep() {
                //先new一个对象
                var listDataItem = {};
                this.count++;
                listDataItem.title = "步骤" + this.count;
                listDataItem.indeterminate= true;
                listDataItem.checkAll=false;
                listDataItem.checkArray = [
                            {id:"dx", name:"短信"},
                            {id:"wx", name:"微信"},
                            {id:"zfb", name:"支付宝"},
                            {id:"dy", name:"电邮"},
                            {id:"sjqq", name:"手机QQ"}
                        ];
                listDataItem.checkAllGroup= [];//'短信', '微信'
                this.listData.push(listDataItem);
                //步骤数变更之后，要重新触发checkAllGroupChange方法
                this.checkAllGroupChange([], 0);
            },
            deleteStep() {
                var length = this.listData.length;
                if(length > 1){
                    //移除最后一个元素
                    this.listData.pop();
                    this.count--;
                    //步骤数变更之后，要重新触发checkAllGroupChange方法
                    this.checkAllGroupChange([], 0);
                }
            }
        }
    }
</script>
