import actionTypes from '../actions/actionType'
const isLogin = (Boolean(window.localStorage.getItem('authToken')) || Boolean(window.sessionStorage.getItem('authToken')))
const userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || JSON.parse(window.sessionStorage.getItem('userInfo'))
const initState = {
    ...userInfo,
    isLogin,
    isLoading: false

}

export default (state = initState, action) => {
    switch(action.type){
        case actionTypes.START_LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLogin: true,
                isLoading: false
            }
        case actionTypes.LOGIN_FAILED:
            return {
                id:'',
                displayName: '',
                avatar: '',
                isLogin: false,
                isLoading: false,
                role: ''
            }
        default:
            return state
    }
}