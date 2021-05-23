<template>
    <div>
<!--         Menu定义一个菜单
:theme表示使用的主题
active-name表示当前选中的菜单项
mode="horizontal"表示水平菜单
 -->    
 <Menu mode="horizontal" :theme="theme1" active-name="1">
<!--         MenuItem表示每一个菜单项
Submenu也是一个菜单项，不过它是一个特殊的菜单，它可以继续延伸子菜单
 -->        
        <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <!-- 这里定义了两个子菜单组 -->
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>

        <br>
    <br>

<!-- 侧栏导航 #
垂直导航菜单，可以内嵌子菜单。
设置 active-name 可以选中指定的菜单，设置 open-names 可以展开指定的子菜单。
设置属性 accordion 可以开启手风琴模式，每次只能展开一个子菜单。
通过设置属性 theme 为 light、dark 可以选择主题，侧栏菜单不支持 primary 主题。 -->
<Row>
    <!-- 这里用row构建了一行，一行中划分了几个列，每一列都是一个垂直菜单
        一个菜单下又可以定义多个子菜单
         -->
        <Col span="8">
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
        <Col span="8">
            <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
        <Col span="8">
            <Menu :theme="theme2" :open-names="['1']" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
    </Row>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
    
    <br>
    <br>

<!-- 内嵌菜单 #
垂直菜单，子菜单内嵌在菜单区域。 -->
    <Menu active-name="1-2" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                洛杉矶湖人
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
                克利夫兰骑士
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-cog" />
                Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
    </Menu>
    <br>
    <br>
    <br>

<!-- 分组 #
使用 MenuGroup 组件进行分组。 -->
<Menu :theme="theme3" active-name="1">
    <!-- 一个Menu下可以有多个MenuGroup，一个MenuGroup表示一个菜单组 -->
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="md-document" />
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="统计分析">
            <MenuItem name="3">
                <Icon type="md-heart" />
                用户留存
            </MenuItem>
            <MenuItem name="4">
                <Icon type="md-leaf" />
                流失用户
            </MenuItem>
        </MenuGroup>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme3">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                theme2: 'light'
            }
        }
    }
</script>
