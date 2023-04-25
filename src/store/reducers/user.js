const insitialState = {
    users:[]
}

const userReducer= (state= insitialState,action)=>{
    switch(action.type){
        case "ADD_USER":
            return{
                users:[...state.users,action.data]
            }
            case "DELETE_USER":
                const tempUser = state.users.filter((user,index)=>{
                    return index!==action.userId
                })
                return{
                    users:[...tempUser]
                }
                default:
                    return state
    }
}
export default userReducer