import { defineStore } from "pinia"
import { ref } from "vue"

//第一个参数：名字，唯一性
//第二个参数：函数
//返回值：函数
export const useTokenStore = defineStore("token", () => {
    //定义一个响应式变量
    const token = ref("")
    //设置token
    const setToken = (newToken) => {
        token.value = newToken
    }
    //移除token
    const removeToken = () => {
        token.value = ""
    }

    return {
        token,
        setToken,
        removeToken
    }    
},{persist: true})