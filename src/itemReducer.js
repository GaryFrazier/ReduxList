export default (state=[], action) => {
    switch(action.type){
        case "ADD_ITEM":
            if(action.payload){
                return[...state, action.payload]   
            }
        case "REMOVE_ITEM":
            return state.filter((_, i) => i !== action.payload) 
    }
    
    return state
}