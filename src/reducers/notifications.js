import actionTypes from '../actions/actionType'
const initState = {
    isLoading: false,
    list: [
        {
            id: 1,
            title: "111Lorem ipsum dolor sit amet",
            desc: "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ea",
            hasRead: false
        },
        {
            id: 2,
            title: "222Lorem ipsum dolor sit amet",
            desc: "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ea",
            hasRead: true
        },
        {
            id: 3,
            title: "3333Lorem ipsum dolor sit amet",
            desc: "333Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ea",
            hasRead: false
        },

    ]
}
export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_NOTIFICATIONS:
            return {
                ...state,
                list: action.payload.list
            }
        case actionTypes.START_AS_READ:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FINISH_AS_READ:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.MARK_NOTIFICATION_AS_READ:
            const newList = state.list.map(item => {
                if (item.id === action.payload.id) {
                    item.hasRead = true
                }
                return item
            })
            return {
                ...state,
                list: newList
            }
        case actionTypes.MARK_ALL_NOTIFICATION_AS_READ:
            
            return {
                ...state,
                list: state.list.map(item => {
                    item.hasRead = true
                return item
            })
            }
        default:

            return state
    }
}