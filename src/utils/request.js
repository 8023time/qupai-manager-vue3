import axios from 'axios'
import { UseUserStore } from '@/stores' 
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://43.138.238.42:8090'

const instance = axios.create({
  baseURL,
  timeout:5000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userstore = UseUserStore()
    if(userstore.token){
        config.headers.Authorization=userstore.token 
    }
    return config
  },
  (err) => Promise.reject(err)
) 
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    if(res.data.code===0){ //在这里的接口文档里面写的就是这个code=0的条件下就是正确的响应
        return res
    }
    ElMessage.error(res.data.message || "服务异常!!!")
    return Promise.reject(res)
  },
  (err) => {
    // TODO 5. 处理401错误
    ElMessage.error(err.data.message || "服务异常!!!")
    if(err.response.status===401){ //这里发现token的值没有或者过期的话就会发生的是跳回到登录页面重新登录
        router.push('/login')
    }else {
      // 显示其他错误信息
      ElMessage.error(err.data.message || "服务异常!")
    }
    return Promise.reject(err)
  }
)

export default instance
export {baseURL}














