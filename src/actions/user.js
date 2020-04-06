import actionTypes from './actionType'
import {message} from 'antd'
import { login } from '../mock'

const startLogin = () => {
    return {
        type: actionTypes.START_LOGIN
    }
} 
const LoginSuccess = (userInfo) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload:userInfo
    }
} 
const LoginFailed = () => {
    window.localStorage.removeItem('authToken')
    window.sessionStorage.removeItem('authToken')
    window.localStorage.removeItem('userInfo')
    window.sessionStorage.removeItem('userInfo')
    return {
        type: actionTypes.LOGIN_FAILED
    }
} 

export const logout = () => {
    return dispatch => {
        dispatch(LoginFailed())
    }
}

export const userLogin = (userInfo) => {
    const userLoginMess = userInfo
        return dispatch => {
            if(userLoginMess.username !== 'admin' || userLoginMess.password !== '123456'){
                    message.success('用户名或密码错误！！！')
            }else{
                dispatch(startLogin())
                    login(userInfo)
                    .then(res => {
                            if(res.status === 200){
                                const {
                                    authToken,
                                    ...userInfo
                                } = res.data.data
                                if(userLoginMess.remember === true){
                                        window.localStorage.setItem('authToken', authToken)
                                        window.localStorage.setItem('userInfo', JSON.stringify({userLoginMess,userInfo}))
                                } else {
                                        window.sessionStorage.setItem('authToken', authToken)
                                        window.sessionStorage.setItem('userInfo', JSON.stringify({userLoginMess,userInfo}))
                                }
                                    dispatch(LoginSuccess(res.data.data))
                            }else{
                                dispatch(LoginFailed())
                            }
                    })
                    .finally(()=>{
                        message.success('登录成功~')
                    })
            }
    }
       
}