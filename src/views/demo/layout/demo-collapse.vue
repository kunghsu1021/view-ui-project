<style scoped lang="less">
</style>
<template>
            <div>
    <!--Collapse表示一个面板集合，下面可以定义多个Panel
        展示哪个面板，通过设置名字来决定，v-model即指定展示面板的名字 
        默认可以同时展开多个面板，可以设置默认展开第几个。
        -->
    <Collapse v-model="value1">
        <Panel name="1">
            史蒂夫·乔布斯
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
        <Panel name="lld">
            利拉德牛逼(这个是面板的标题)
            <p slot="content">这些是具体的面板内容，利拉德屠杀约基奇</p>
        </Panel>
    </Collapse>
    <Button type="primary" @click="changePanel">Primary</Button>

    <!-- 通过设置属性accordion开启手风琴模式，每次只能打开一个面板。-->
 <Collapse v-model="value2" accordion>
        <Panel name="1">
            史蒂夫·乔布斯
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
    </Collapse>

<!--     面板嵌套 #
折叠面板可以进行嵌套。 -->
    <Collapse accordion v-model="value3">
        <Panel name="1">
            史蒂夫·乔布斯
            <div slot="content">
                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                <Collapse accordion v-model="value4">
                    <Panel name="1-1">
                        iPhone
                        <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>
                    </Panel>
                    <Panel name="1-2">
                        iPad
                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>
                    </Panel>
                </Collapse>
            </div>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
    </Collapse>
    
<!--     简洁模式 #
设置属性 simple 可以显示为不带边框和背景色的简洁模式。 -->
    <Collapse simple>
        <Panel name="1">
            史蒂夫·乔布斯
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
    </Collapse>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 'lld'
            }
        },
        methods:{
            changePanel () {
                //同时只能展示一个面板，可通过改变值来切换面板
                this.value1 = '1';
                alert("触发changePanel");
            }
        }
    }
</script>
