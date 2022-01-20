import {ADD, DELETE} from './actiontype'
const initialState ={
    items: [],
}

export const todoReducer=(state=initialState, action) =>{
switch (action.type) {
    case ADD: return{...state, items:[...state.items, action.payload]}
    case DELETE: return{...state, items: state.items.filter(item => item.id !== action.payload)}
    
    default: return state;
    
}


}


