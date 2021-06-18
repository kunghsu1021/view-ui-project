/**
 * Error: Can't resolve 'webpack-zepto'
 * 执行命令：npm i webpack-zepto
 */
import $ from 'webpack-zepto' 

window.$ = $;
let http = function (instance){
    //处理请求时候显示遮罩的问题
    $.ajaxSettings.beforeSend = ()=>{
        if(instance.$ui)
        instance.$ui.loading.show();
    }
    $.ajaxSettings.complete = (xhr)=>{
        if(instance.$ui)
        instance.$ui.loading.hide();
    }


let baseRequest = opt => {
    let options = {
        url: opt.url,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        success: (respBody) =>{
            if(false){//判断返回码是不是登录拦截，假如是做重定向
                if(false){
                    //假如匹配上是登录拦截的返回码例如3000，就做重定向
                }else{

                }

            }else{
                opt.callback && opt.callback(respBody);
            }
        },
        error:()=>{
            instance.$Message.error('网络异常，请稍后再试');
        }
    }
    $.ajax(Object.assign({}, options, opt));
}

let ret = {
    get(url, callback){
        baseRequest({
            url,callback,type: 'GET'
        })
    },
    post(url, params, callback){
        baseRequest({
            url,callback,
            data: JSON.stringify(params),
            type: 'POST'
        })
    },
    pureGet(){//不执行 beforeSend和complete的方法
        baseRequest({
            url,
            callback,
            type: 'GET',
            beforeSend: () =>{},
            complete: ()=>{}
        })
    },
    purePost(){
        baseRequest({
            url,
            callback,
            data: JSON.stringify(params),
            type: 'POST',
            beforeSend: () =>{},
            complete: ()=>{}
        })
    },
    request(options){
        $.ajax(options);
    }
}

return ret;
}

export default http;
