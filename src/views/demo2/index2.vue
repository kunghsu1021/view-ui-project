<style lang="less" scoped>
//  .layout{
//         border: 1px solid #d7dde4;
//         background: #f5f7f9;
//         position: relative;
//         border-radius: 4px;
//         overflow: hidden;
//     }
//     .layout-header-bar{
//         background: #fff;
//         box-shadow: 0 1px 1px rgba(0,0,0,.1);
//     }
 
</style>
<template>
  <section class="admin-layout-container">
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <div class="logo" >
                    <img :src="logo" width="100" v-if="!isCollapsed"/>
                    <!-- 头像 -->
                    <Avatar icon="person" size="large" v-else/>
                </div>
                <Menu 
                    ref="side_menu"
                    :active-name="activeMenuName" 
                    :open-names="openMenuName"
                    theme="dark"
                    width="auto" 
                    :class="menuitemClasses"
                    @on-select="choosedMenu"
                    v-if="!isCollapsed">
                    <template v-for="(menu,menu_index) in menus">
                        <Submenu :name="menu.name" v-if="menu.children">
                            <template slot="title">
                                <Icon :size="20" :type="menu.icon"></Icon>
                                {{menu.title}}
                            </template>
                            <MenuItem :name="child.name" v-for="(child ,child_index) in menu.children" :key="child_index">
                                <Icon :size="20" :type="child.icon"></Icon>
                                {{child.title}}
                            </MenuItem>
                        </Submenu>
                        <MenuItem :name="menu.name" v-if="!menu.children && menu.showInMenus">
                             <Icon :size="20" :type="menu.icon"></Icon>
                            {{menu.title}}
                        </MenuItem>
                    </template>                    
                </Menu>
                <div class="dropdown-wrap">
                    <template v-for="(menu,menu_index) in menus" v-if="isCollapsed">
                        <Dropdown transfer placement="right-start" v-if="menu.children" @on-click="dropdownClick">
                            <Button style="width: 85px;margin-left: -5px;padding:10px 0;" type="text">
                                <Icon :size="25" color="#fff" :type="menu.icon"></Icon>
                            </Button>
                            <DropdownMenu style="width: 200px;" slot="list">
                                <template v-for="(child, i) in menu.children">
                                    <DropdownItem :name="child.name">
                                        <div style="display:flex;align-items:center;">
                                            <Icon :size="16" :type="child.icon"></Icon>
                                            <span style="padding-left:10px;">
                                                {{ child.title }}
                                            </span>
                                        </div>
                                    </DropdownItem>
                                </template>  
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown transfer v-if="!menu.children && menu.showInMenus" placement="right-start" @on-click="dropdownClick">
                            <Button style="width: 85px;margin-left: -5px;padding:10px 0;" type="text">
                                <Icon :size="25" color="#fff" :type="menu.icon"></Icon>
                            </Button>
                            <DropdownMenu style="width: 200px;" slot="list">
                                <DropdownItem :name="menu.name">
                                    <div style="display:flex;align-items:center;">
                                        <Icon :size="16" :type="menu.icon"></Icon>
                                        <span style="padding-left:10px;">
                                            {{ menu.title }}
                                        </span>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </template>         
                </div>            
            </Sider>
            <Layout>
                <Header>
                    <div>
                        <div>
                            <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" size="24"></Icon>
                            <span style="font-size:18px;font-weight:bold;color:red;">{{user.name}}后台管理系统</span>
                        </div>
                        <div>
                            <!-- <Button type="text" icon="person" size="large">个人中心</Button>
                            <Button type="text" icon="android-notifications" size="large" @click="clickNotice">消息通知</Button> -->
                            <Button type="text" icon="android-exit" size="large" @click="quit">退出系统</Button>
                        </div>
                    </div>     
                    <div>
                        <template v-for="(tab,tab_index) in tags">
                            <Tag type="dot" 
                            :closable="tab.closable" 
                            :color="tab.choosed ? 'blue':'#e9eaec'"
                            :name="tab.name"
                            @click.native="clickTag(tab)"
                            @on-close="closeTag" >
                                {{tab.title}}
                            </Tag>
                        </template>
                    </div>                  
                </Header>                
                <Content >
                    <!--保存组件状态到内存，避免重新渲染-->
                    <!--      
                    
                    :style="{
                    height: 'calc(100% - 100px)',
                    position: 'absolute',
                    top: '100px',
                    overflow: 'auto',
                    padding: '10px',
                    width:isCollapsed?'calc(100% - 78px)':'calc(100% - 200px)'
                    }"
                        -->
                        <!-- :key="routerPath" -->
                    <keep-alive>
                              <router-view></router-view>    
                    </keep-alive> 
                </Content>
            </Layout>
        </Layout>
    </div>
  </section>
</template>
<script>
import {mapActions,mapState} from 'vuex'
 
export default {
    data(){
        return{
            routerPath:"",
            user:{
                name: "Kunghsu"
            },
            logo:`${this.$qiniuFileUrl}${process.env.LOGO}`,
            isCollapsed: false, //双向绑定的属性  是否隐藏Sider
            // ------------------------------  菜单操作开始  --------------------------------
            title:'首页',
            activeMenuName:'admin',
            openMenuName:[],
            menus:[
                {
                    title:'首页',
                    num:1,
                    name:'admin',
                    icon:'home',
                    href:'/admin',
                    closable:false,
                    showInTags:true,
                    showInMenus:true,
                    choosed:true,
                },
                {
                    title:'课程管理',
                    name:'course-manage',
                    icon:'ios-bookmarks',
                    href:'/admin/course',
                    closable:true,
                    showInTags:false,
                    showInMenus:true,
                    choosed:false,
                },
                {
                    title:'老师管理',
                    name:'teacher-manage',
                    icon:'person-stalker',
                    href:'/admin/teacher',
                    closable:true,
                    showInTags:false,
                    showInMenus:true,
                    choosed:false,
                },               
                {
                    title:'学生管理',
                    name:'student-manage',
                    icon:'university',
                    href:'/admin/student',
                    closable:true,
                    showInTags:false,
                    showInMenus:true,
                    choosed:false,
                },
                {
                    title:'课堂',
                    name:'class-manage-parent',
                    icon:'easel',
                    children:[
                        {
                            title:'页面1',
                            name:'demo2-page1',
                            icon:'erlenmeyer-flask',
                            href:'/demo2/page1',
                            closable:true,
                            showInTags:true,
                            showInMenus:true,
                            choosed:false,
                        },
                        {
                            title:'页面2',
                            name:'demo2-page2',
                            icon:'android-time',
                            href:'/demo2/page2',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false,
                        }
                    ]
                },
                {
                    title:'APK管理',
                    name:'apk-manage',
                    icon:'social-android',
                    href:'/admin/apk',
                    closable:true,
                    showInTags:false,
                    showInMenus:true,
                    choosed:false,
                },
                {
                    title:'设置',
                    name:'setting',
                    icon:'gear-a',
                    href:'/admin/setting',
                    closable:true,
                    showInTags:false,
                    showInMenus:true,
                    choosed:false,
                },
                {
                    title:'消息通知',
                    name:'notice',
                    icon:'ios-navigate',
                    href:'/notice',
                    closable:true,
                    showInTags:false,
                    showInMenus:false,
                    choosed:false,
                }
            ]
            // ------------------------------  菜单操作结束  --------------------------------   
        }
    },
    computed: {
        // ...mapState(
        //     {
        //         user:state=>state.user
        //     }
        // ),
        // 筛选menus中选中的menu
        tags(){
            let tags = [];
            // 将menus中showInTags=true的标签放到tags数组中
            this.menus.forEach(menu=>{
                if(menu.showInTags){
                    tags.push(menu);
                }else if(menu.children){
                    menu.children.forEach(child=>{
                        if(child.showInTags){
                            tags.push(child)
                        }
                    })
                }
            });
            console.log('tags=>',tags)
 
            //标签数组排序，从小到到
            tags.sort((a,b)=>{
                return (a.num - b.num)
            })
            return tags;
        },
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    // ------------------------------  菜单操作开始  --------------------------------
    //刷新页面之后保存并选中最后一次菜单和标签
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // 通过 `vm` 访问组件实例
            let activeMenuName = localStorage.activeMenuName;
            vm.activeMenuName = activeMenuName;
 
            let tags_last_num = vm.tags[vm.tags.length - 1].num; 
 
            if(activeMenuName && activeMenuName.length != 0){
                vm.menus.forEach(_menu=>{
                    if(activeMenuName == _menu.name){                        
                        _menu.choosed = true;
                        _menu.showInTags = true;
                        _menu.num = tags_last_num + 1;
                    }
                    else if(_menu.children){
                        _menu.children.forEach(child=>{
                            if(activeMenuName == child.name){
                                child.choosed = true;
                                child.showInTags = true;
                                child.num = tags_last_num + 1;
                                vm.openMenuName = [_menu.name];      
                            }
                        })                 
                    }
                    else{
                        // 排除首页
                        if(_menu.name != 'admin'){
                            _menu.choosed = false;
                            _menu.showInTags = false;
                        }else{
                            _menu.choosed = false;
                        }
                    }
                })
            }
            vm.$nextTick(()=>{
                vm.$refs.side_menu.updateOpened();
                vm.$refs.side_menu.updateActiveName();
            });           
        })        
    },
    // ------------------------------  菜单操作结束  --------------------------------
    methods: {
        // ...mapActions([
        //     'logout'
        // ]),
        quit(){
            this.logout();
            localStorage.removeItem('token');
            localStorage.removeItem('activeMenuName');
            this.$router.push('/login')
        },
        clickNotice(){
            this.choosedMenu('notice');
        },
        collapsedSider() {
            this.$refs.side1.toggleCollapse();
        },
        // ------------------------------  菜单操作开始  --------------------------------
        closeTag(event, name){
            // 判断该标签是否是选中状态
            // 如果是那么就要设置标签数组中最后一个标签成选中状态
            // 如果否那么就直接删除就好
            let is_choosed = false;
            this.menus.forEach((menu,_index)=>{
                if(menu.name == name){
                    is_choosed = menu.choosed;
                    menu.showInTags = false;
                }else if(menu.children){
                    menu.children.forEach(child=>{
                        if(child.name == name){
                            is_choosed = child.choosed;
                            child.showInTags = false;
                        }
                    })
                }
            })          
            // 关闭标签并选中tags中最后一个标签高亮  
            if(is_choosed){
                let last_tag = this.tags[this.tags.length-1];
                last_tag.choosed = true;
                this.$router.push(last_tag.href);
                this.activeMenuName = last_tag.name;
                localStorage.activeMenuName = this.activeMenuName;
            }            
        },
        clickTag(tag){
            this.tags.forEach(_tag=>{
                if(_tag.name == tag.name){
                    _tag.choosed=true;
                }else{
                    _tag.choosed= false;
                }
            })
            // 设置菜单选中name
            this.activeMenuName = tag.name;
            localStorage.activeMenuName = this.activeMenuName;
            // 刷新菜单
            this.$nextTick(()=>{
                if(this.$refs.side_menu){
                    this.$refs.side_menu.updateActiveName()
                }
            });
            //点击tab跳转
            this.$router.push(`${tag.href}`);
        },
        choosedMenu(name){
            // 获取标签数组最后一个元素的num
            let tags_last_num = this.tags[this.tags.length - 1].num;
            // 设置选中菜单name
            this.activeMenuName = name;
            localStorage.activeMenuName = this.activeMenuName;
            let if_tab = false;
 
            //根据name查找对应的菜单对象
            let menu = null;
            this.menus.forEach(_menu=>{
                if(_menu.name == name){   
                    // 只有不在tags数组中的元素才能设置num                 
                    if(!_menu.showInTags){                   
                        _menu.num = tags_last_num + 1;
                    }
                    menu = _menu;
                    _menu.showInTags = true;
                    _menu.choosed = true;                
                                        
                }
                else if(_menu.children){
                    _menu.children.forEach(child=>{
                        if(child.name == name){     
                            // 只有不在tags数组中的元素才能设置num                       
                            if(!_menu.showInTags){
                                child.num = tags_last_num + 1; 
                            }            
                            menu = child;                
                            child.showInTags = true;
                            child.choosed = true;
                            
                        }else{
                            child.choosed = false;
                        }
                    })
                }
                else {
                    _menu.choosed = false;
                }
            })
            console.log("传入到push函数：" + `${menu.href}` );
            // this.routerPath = `${menu.href}`;
            this.$router.push({ path: menu.href });
        },
        dropdownClick(name){
            this.choosedMenu(name);
        }
        // ------------------------------  菜单操作结束  --------------------------------
    }
}
</script>