import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {ADD} from '../redux/actiontype'

function Add() {

const dispatch = useDispatch();
const [newItem, setnewItem] = useState();
const handleChange =(e)=> setnewItem(e.target.value);
const handleClick =()=> dispatch( { type:ADD, payload:{text: newItem, id:Math.random()} } );
return ( <div className="additem"> 
<input className='input' type="text" value={newItem} onChange={handleChange} />
<Button variant="success" onClick={handleClick}><i className="fas fa-plus-square"></i></Button>

</div>)
} 


export default   Add;
