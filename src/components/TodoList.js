import React from 'react';
import './TodoList.css';

const completeClass = (completed) => {
  if(completed) {
    return 'todoItem--completed'
  }
  return '';
}

const TodoList = (props) => (
  <ul className='todoContainer'>
    {
      props.todos.map(todo => (
        <li key={todo.id} className={`todoItem ${completeClass(todo.completed)}`}>
          <span 
            className='todoText' 
            onClick={() => props.toggle(todo.id)}
            title='check or uncheck todo'
          >
            <i className='checkedIcon fa fa-check'></i>
            {todo.text}
          </span>
          <button 
            className='btnDelete' 
            onClick={() => props.del(todo.id)}
            title='delete todo'
          >
            <i className='fa fa-trash'></i>
          </button>
        </li>
      ))
    }
  </ul>
);

export default TodoList;
