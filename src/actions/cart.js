import actionType from './actionType'

/**
 * @param {*} id 
 * action   有两种写法：
 *      1)写成一个对象，这是标准的action，但是，问题不方便传递动态参数
 *            export const increment = {
 *                     type: ×××,
 *                     payload{
 *                          id: ×××
 *                     }      
 *              }
 *      2)工作中，常用actionCreate  它是一个方法，返回一个对象，这个对象就是action
 */

export const increment = (id) => {
    return {
        type: actionType.CART_AMOUNT_INCREMENT,
        payload: {
            id
        }
    }
}
export const decrement = (id) => {
    return {
        type: actionType.CART_AMOUNT_DECREMENT,
        payload: {
            id
        }
    }
}

// 异步action，使用redux-thunk 之后，就可以在actionCreator里返回一个方法，这个方法参数是dispatch

// export const decrementAsync = (id) => {
//         return (dispatch) => {
//             setTimeout(() => {
//                 dispatch(decrement(id))
//             },2000)
//         }
// }
export const decrementAsync = id => dispatch => {
    setTimeout(() => {
        dispatch(decrement(id))
    },2000)
}