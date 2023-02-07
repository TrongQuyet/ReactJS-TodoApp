const initstate={
    users:[
        {id:1,name: 'John'},
        {id:2,name: 'c'}
    ],
    users1:[
        {id:3,name: 'quyết'},
    ]
}
    

const rootreducers=(state=initstate,action)=>{

    switch(action.type){
        case 'DELETE_USER':
            console.log(action);
            let users = state.users;
            users = users.filter(item=>item.id !== action.payload.id);
            return {
                ...state,users
            };
            break;
            case 'ADD_USER':
            let id = Math.floor(Math.random()*10000);
            let user = {id :id ,name:`random-${id}`}
            return {
                ...state,users:[...state.users,user]
            };
            default:
                return state;
        
     }
}
export default rootreducers;