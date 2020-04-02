import actionType from '../actions/actionType'
const initState = {
    list: [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
        }
    ],
    errMsg:'',
    isLoading: false
}
export default (state = initState,action) => {
    // console.log(action)
        switch(action.type){
            case actionType.START_FETCH_BLOG_LIST:
                return {
                    ...state,
                    isLoading: true
                }
                case actionType.FETCH_BLOG_LIST_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        list:action.payload.list,
                        errMsg:''
                    }
                    case actionType.FETCH_BLOG_LIST_FAILED:
                    return {
                        ...state,
                        isLoading: false,
                        errMsg: '出错了'
                    }
            default:
                return state
        }
}