import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
   handleSubmit(e) {
    e.preventDefault();
    const text = document.querySelector('#txtNewTodo').value;
    this.props.add(text);
    document.querySelector('#txtNewTodo').value = '';    
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} action="#">
        <input 
          className='txtNewTodo'
          id='txtNewTodo'
          type="text"
          placeholder="Add a new Todo"          
        />  
        <button className='btnNewTodo' title='add todo'>
          <i className='fa fa-plus'></i>
        </button>
      </form>
    );
  }
}

export default NewTodo;
