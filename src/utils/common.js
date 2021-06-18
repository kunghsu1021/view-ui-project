import Http from './ajax'
//这里还可以继续引入其他工具类

const common = {
    install(Vue){
        Vue.mixin({
            created: function(){
                //其他组件里可以直接使用这个common对象
                this.COMMON = window.COMMON = {
                    Http: new Http(this)
                    //还可以定义其他对象
                }
            }
        });
    }
}

export default common;