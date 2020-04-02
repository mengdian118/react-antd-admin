import { combineReducers } from 'redux'

import cart from './cart'
import blog from './blog'

export default combineReducers({
    cart,
    blog
})