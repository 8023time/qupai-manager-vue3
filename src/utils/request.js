import axios from 'axios'
import { UseUserStore } from '@/stores/index' 
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout:5000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userstore = UseUserStore()
    const token = userstore.token
    if(token){
        config.headers.token = token
        console.log(userstore.token);
    }else {
      console.warn('没有token!!!');
    }
    return config
  },
  (err) => Promise.reject(err)
) 
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    if(res.data.code===1){ //在这里的接口文档里面写的就是这个code=1的条件下就是正确的响应
        return res
    }
    ElMessage.error(res.data.message || "服务异常!")
    return Promise.reject(res)
  },
  (err) => {
    // TODO 5. 处理401错误   请求要求用户的身份认证
    ElMessage.error(err.data.message || "服务异常!")
    if(err.response.status===401){ //这里发现token的值没有或者过期的话就会发生的是跳回到登录页面
      const userstore = UseUserStore()
      userstore.removetoken()
      router.push('/login')
    }else {
      ElMessage.error(err.data.message || "服务异常!")
    }
    return Promise.reject(err)
  }
)

export default instance
export {baseURL}