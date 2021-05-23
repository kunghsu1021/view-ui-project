<template>
<div>
   <!--  一个Dropdown就表示一个下拉菜单 -->
    <Dropdown>
        <!-- 定义下拉菜单的事件可以用a或者button
            不用写点击函数，iview会自动实现 -->
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <!-- 定义菜单总共有哪些项，下拉列表项 -->
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <br>
        <br>
            <br>
<!-- 触发方式 #
通过设置属性 trigger 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。

触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。 -->
    <Dropdown>
        <a href="javascript:void(0)">
            hover 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="contextMenu" style="margin-left: 20px">
        <a href="javascript:void(0)">
            right click
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>返回</DropdownItem>
            <DropdownItem style="color: #ed4014">删除</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            custom 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
                <Button type="primary" @click="handleClose">关闭</Button>
            </div>
        </DropdownMenu>
    </Dropdown>

    <br>
        <br>
            <br>
<!-- 对齐方向 #
通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。 -->
<Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            菜单(左)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            菜单(居中)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            菜单(右)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <br>
        <br>
            <br>

<!--             嵌套用法 #
下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。

嵌套用法不支持 transfer 属性。 -->
<Dropdown>
        <a href="javascript:void(0)">
            北京小吃
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <!-- 这里就是一个嵌套的方式，将一个下拉菜单作为一个单独的菜单项 -->
            <Dropdown placement="right-start">
                <DropdownItem>
                    北京烤鸭
                    <Icon type="ios-arrow-forward"></Icon>
                </DropdownItem>
                <DropdownMenu slot="list">
                    <DropdownItem>挂炉烤鸭</DropdownItem>
                    <DropdownItem>焖炉烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <DropdownItem>冰糖葫芦</DropdownItem>
        </DropdownMenu>
    </Dropdown>


</div>
</template>
<script>
export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>
