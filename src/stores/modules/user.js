import { defineStore } from "pinia"
import { ref } from 'vue'
import { ckeckuserinfo } from "@/api/user"
export const UseUserStore = defineStore('qupai-user',()=>{
    //在这里存的就是这个token的值
    const token = ref('')
    const settoken = (newtoken) => {
        token.value = newtoken
    }
    const removetoken = () => {
        token.value=''
    }

    //在下面的这里存的就是用户的一些个人的信息
    const user = ref({})
    const getuserinfor = async() => {
        const res = await ckeckuserinfo()
        user.value=res.data.data
    }
    const setuserinformation = (obj) => {
        user.value = obj
    }
    return {
        token,
        settoken,
        removetoken,
        //用户的个人信息
        user,
        getuserinfor,
        setuserinformation
    }},{
        persist:true //持久化存储到本地的浏览器中
    }
)
    