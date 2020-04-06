
import actionTypes from './actionType'
import {getNotifications} from '../mock'
const startMarkAsRead = () => {
    return {
        type: actionTypes.START_AS_READ
    }
}
const finishMarkAsRead = () => {
    return {
        type: actionTypes.FINISH_AS_READ
    }
}
export const markNotification = (id) => {
        return dispatch => {
            dispatch(startMarkAsRead())
            //这里是模拟服务端的一个请求
            setTimeout(() => {
                dispatch({
                    type: actionTypes.MARK_NOTIFICATION_AS_READ,
                    payload: {
                        id
                    }
                })
                dispatch(finishMarkAsRead())
            },500)
        }
}
export const markAllNotification = () => {
    return dispatch => {
        dispatch(startMarkAsRead())
        //这里是模拟服务端的一个请求
        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_ALL_NOTIFICATION_AS_READ
            })
            dispatch(finishMarkAsRead())
        },500)
    }
}

export const getNotificationList = () => {
    return dispatch => {
        dispatch(startMarkAsRead())
        //这里是模拟服务端的一个请求
        getNotifications()
        .then(res=>{
            // console.log(res)
            dispatch({
                type:actionTypes.RECEIVE_NOTIFICATIONS,
                payload: {
                    list: res.list
                }
            })
            dispatch(finishMarkAsRead())
        })
    }
}