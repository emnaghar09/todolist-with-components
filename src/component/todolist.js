import React from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {DELETE} from '../redux/actiontype'

function Todolist() {
    const dispatch = useDispatch();
    const handleClick =(id)=> dispatch( { type:DELETE, payload: id} );
        const lol = useSelector(state => state.items)
        return (
            <ol type="1" className="liste">
{lol.map(item=><li className='listitem'>{item.text} <Button onClick={()=>handleClick(item.id)}><i className="fas fa-trash-alt"></i></Button></li>)}
            </ol>
    )}

    export default  Todolist;