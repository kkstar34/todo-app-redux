
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/addTodo';

function AddTodo() {

    const [title, setTitle] = useState("");
    const [number, setNumber] = useState(0);
    const dispacth = useDispatch();


    function addT(){
        const todo = { 
            id : Date.now(),
            number  : number,
            description : title,
            isDone : false,
        }
        dispacth(addTodo(todo));
        setTitle('');
        setNumber('');
    }

    


  return (
    <div className="form" onSubmit={addTodo}>
    <input type="text" placeholder="Title..." className='input-title' onChange={(e) => setTitle(e.target.value)} value={title}/>
    <input type="number" placeholder="14" className='number'  onChange={(e) => setNumber(e.target.value)} value={number}/>
    <div className="btn-add" onClick={addT}>Add</div>
  </div>
  )
}

export default AddTodo;