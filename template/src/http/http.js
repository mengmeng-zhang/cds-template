import axios from 'axios'
import { Message  } from 'element-ui';
import Loading from '@/utils/loading';
import utils from "@/utils"
import base from './api/base';

class Http extends Loading {
  constructor(){
    super()
    this.instance = axios.create({timeout: 1000 * 60})
    this.instance.defaults.headers.post['Content-Type'] = 'application/json'
    /**
    * 请求拦截器
    * 每次请求前，如果存在token则在请求头中携带token
    */
    this.instance.interceptors.request.use(
      config => {
        // 格式化url
        config.url = `${base.api}${config.url}`
        // 在发送请求之前显示加载层
        if(config.method === "post"){
          if(!config.data.refresh){
            this.showLoading()
          }
        }else{
          this.showLoading()
        }

        const token = utils.getQueryString("token");
        // header中附带token,同时接口数据中也附带token
        token && (config.headers.token = token);
        if(config.method === "get"){
          config.params = {
            token: token,
            ...config.params
          }
        }
        if(config.method === "post"){
          config.params = {
            token: token
          }
          config.data = {
            ...config.data
          }
        }
        return config;
      },
      error => Promise.error(error))

    // 响应拦截器
    this.instance.interceptors.response.use(
      // 请求成功
      res => {
        // 兼容没有model层的ajax，防止model提前卸载
        try{
          if(res.config.method === "post"){
            let resqusetData = window.JSON.parse(res.config.data)
            if(!resqusetData.refresh){
              this.hideLoading()
            }
          }else{
            this.hideLoading()
          }
        }catch(e){
          this.hideLoading()
          console.log(e)
        }
        if(res.status === 200){
          if(res.data.code === "20002"){
            // token失效，通知控制台跳转登录页
            this.toLogin()
          }else{
            // 优先弹出message,如果为空，则弹出本地错误码
            if(res.data.code !== "0000"){
              this.tip(this.code(res.data.code, res.data.message))
            }
          }
          return Promise.resolve(res.data)
        }else{
          this.tip("系统错误，请联系管理员！")
          return Promise.reject(res)
        }
      },
      // 请求失败
      error => {
        try{
          this.hideLoading()
          const { response } = error;
          if (response) {
              // 请求已发出，但是不在2xx的范围
              this.errorHandle(response.status, response.data.message)
              console.log(`错误码：${response.status},错误日志：${response.data.message}`)
              return Promise.reject(response);
          } else {
            // 消息未发出，视为网络不通
            this.tip("网络错误，请检查本地网络！")
            return Promise.reject(`网络错误，请检查本地网络！`);
          }
        }catch(e){
          console.log(e)
        }
      })
  }
  /**
  * 提示函数
  */
  tip = msg => {
    Message.error(msg);
  }

  /**
  * 跳转登录页
  */
  toLogin = () => {
    parent.postMessage( {login: "Unauthorized"}, '*');
  }

  /**
  * 请求失败后的错误统一处理
  * @param {Number} status 请求失败的状态码
  */
  errorHandle = (status, other) => {
    this.tip(`系统错误，请联系管理员！-- ${this.errorHandleCode[status] || other}`)
  } 
}

export default Http;
