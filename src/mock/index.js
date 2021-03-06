import axios from 'axios'
import {message} from 'antd'
const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/249271' : ''
})
const service1 = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/249271' : ''
})
service.interceptors.request.use((config) => {
    // console.log(config)
    config.data = Object.assign({},config.data,{
    //     // authToken: window.localStorage.getItem('authToken')
        authToken: 'itisddsdffdddddsewwasa'
    })
    return config
})
service.interceptors.response.use((res) => {
    // console.log(res.data)
    if(res.data.code === 200){
        return res.data.data
    }else{
       message.error(res.data.errMsg)
    }

})

//获取文章列表
export const getArticles = (offset = 0,limit = 10) => {
    return service.post('/api/v1/articleList',{
        offset,
        limit
    })
}

// 通过id删除文章
export const deleteAticle = (id) => {
        return service.post(`/api/v1/articleDelete/${id}`)
}

//通过id获取文章 
export const getAticleById = (id) => {
    return service.post(`/api/v1/article/${id}`)
}
//保存文章
export const saveArticle = (id,data) => {
    return service.post(`/api/v1/articleEdit/${id}`,data)
}

//获取通知列表 /api/v1/notifications
export const getNotifications = () => {
    return service.post('/api/v1/notifications')
}
//登录 /api/v1/login
export const login = (userInfo) => {
    return service1.post('/api/v1/login',userInfo)
}