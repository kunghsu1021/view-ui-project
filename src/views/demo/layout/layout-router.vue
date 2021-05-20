<template>
	<div>
         <!-- 这里假如有html内容，例如下面的p,会直接展示到子路由的页面中 -->
<!-- 		<p>我是父路由的内容。。。。。</p>
 --><!-- 		<p><router-link to="/demo-layout1">返回</router-link></p>
		<p><router-link to="/A1">转向A1</router-link></p>
                必须加这个，作用就是挂载子路由
            假如不挂载，上面的转向A1子路由，不能正常显示，无法跳转 
            -->
		<!-- <router-view></router-view> --> 

        <!-- 这个必须要有，否则所有children子路由的内容都展示不出来 -->
        <router-view></router-view>
	</div>
</template>