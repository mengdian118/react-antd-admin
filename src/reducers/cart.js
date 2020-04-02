
// 为了避免 actionType 重复、写错，所以会放在一个文件统一管理

import actionsType from '../actions/actionType'

//对购物车来说，初始化状态
const initState = [
    {
        id: 1,
        title: '苹果',
        price: 555,
        amount: 10
    },
    {
        id: 2,
        title: '香蕉',
        price: 666,
        amount: 15
    }
]
// 创建购物车的reducer，reducer的固定写法：两个参数，第一个就是state赋予一个初始值，第二个是action
export default (state = initState, action) => {
    // 根据不同的actionType，返回新的state
    switch (action.type) {
        case actionsType.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount += 1
                }
                return item
            })
        case actionsType.CART_AMOUNT_DECREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount -= 1
                }
                return item
            })
            //一定要有default，当actionType发生错误时，不做处理，返回上一次的state
        default:
            return state
    }
}