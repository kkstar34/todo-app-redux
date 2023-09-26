import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from './../redux/actions/removeTodo';
import { completeTodo } from '../redux/actions/completeTodo';

function Todo(props) {

    const dispatch = useDispatch();

    function removeT(id) {
        dispatch(removeTodo(id));
    }

    function completeT(id){
        dispatch(completeTodo(id));
    }
  return (
    <div className="todo">
        <div className="description">
        <div className="todo-number">
            <h4>{props.todo.number}</h4>
        </div>

        <div className={props.todo.isDone ? "todo-name line-through" : "todo-name"}>
            <h4>{props.todo.description}</h4>
        </div>
        </div>
        <div className="remove">
            <i class="fa-regular fa-circle-check check" onClick={() => completeT(props.todo.id)} ></i>
            <img src="Vector.svg" alt="" onClick={() => removeT(props.todo.id)} className='icone-remove'/>
        </div>
  </div>
  )
}

export default Todo