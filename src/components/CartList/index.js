import React, { Component } from 'react'
import HeaderTitle from '../HeaderTitle'
import { increment, decrement, decrementAsync } from '../../actions/cart'
import { connect } from 'react-redux'

/**
 *  在react中使用redux的思路：
 *      1）先安装 redux react-redux  ---yarn add redux react-redux
 *      2) 创建目录结构：
 *              src
 *                 |--actions
 *                       |--actionType.js
 *                       |--...action_name.js
 *                 |--reducers
 *                       |--action_name.js
 *                 |--store.js  (要使用redux中的createStore方法，如果多个reducer 就需要使用combineReducers来合并导出)
 *       3) 根据所需 分别在actions reducers 创建各自的行为         
 *                  
 * 
 * 
 * 
 */



class CartList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartList: []
        }
    }

    render() {
        return (
            <div>
                <HeaderTitle title="二、redux+react-redux实现store自动连接组件通信" />
                <h4>***借助redux-thunk实现异步操作***</h4>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>商品名称</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cartList.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.amount}</td>
                                        <td>
                                            <div>
                                                <button onClick={this.props.decrementAsync.bind(this,item.id)}>waitDecrement</button>
                                                <button onClick={this.props.decrement.bind(this,item.id)}>-</button>
                                                <span>{item.amount}</span>
                                                <button onClick={this.props.increment.bind(this,item.id)}>+</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

//这里的state实际上就是store.getState()的值
const mapState = (state) => {
    // console.log(state)
    //这里返回值 就可以用this.props来获取
    return {
        cartList: state.cart
    }
}



export default connect(mapState,{increment,decrement,decrementAsync})(CartList)
