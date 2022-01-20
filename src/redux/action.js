import {ADD, DELETE} from './actiontype'


export const addHandler = () =>{ return{ type: ADD, payload:{text: newItem, id:Math.random()}}}
export const deleteHandler = (ID) =>{ return{ type: DELETE, payload: ID}}