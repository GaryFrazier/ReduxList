export default (state=[], action) => {
    switch(action.type){
        case "ADD_ITEM":
            if(action.payload){
                return[...state, action.payload]   
            }
    }
    
    return state
}