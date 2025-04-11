//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
import { ElMessage } from 'element-plus'
//定义一个变量,记录公共的前缀  ,  baseURL
// const baseURL = 'http://localhost:8080'
const baseURL = '/api'
const instance = axios.create({baseURL})

import { useTokenStore } from '@/stores/token.js'
//添加请求拦截器
instance.interceptors.request.use(
    (config)=>{
        //获取token
        const tokenStore = useTokenStore()
        //判断token是否存在
        if(tokenStore.token){
            //添加token
            config.headers.Authorization = tokenStore.token
        }
        return config
    },
    (err)=>{
        Promise.reject(err)
    }
)

// import { useRouter } from 'vue-router'
// const router = useRouter()
import router from '@/router'

//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        if(result.data.code === 0){
            return result.data;
        }
        
        // alert(result.data.msg? result.data.msg : '服务异常');
        ElMessage.error(result.data.msg? result.data.msg : '服务异常');
        return Promise.reject(result.data);
    },
    err=>{
        if(err.response.status === 401){
            //跳转到登录页面
            ElMessage.error('未登录或登录过期,请先登录')
            router.push('/login')
        }else{
            ElMessage.error('服务异常');
        }
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)

export default instance;