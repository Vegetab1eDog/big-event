import request from '@/utils/request.js'

export const userRegisterService = (registerData) => {
    // 借助urlSearchParams将对象转换为查询字符串
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}

export const userLoginService = (loginData) => {
    // 借助urlSearchParams将对象转换为查询字符串
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, loginData[key])
    }
    return request.post('/user/login', params)
}