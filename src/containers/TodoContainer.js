import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {add, del, toggle} from '../actions/todoActions';
import TodoList from '../components/TodoList';
import NewTodo from '../components/NewTodo'; 

class TodosListContainer extends Component {
  render() {
    return (
      <div>
        <NewTodo add={this.props.add} />
        <TodoList 
          todos={this.props.todo}
          toggle={this.props.toggle}
          del={this.props.del}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ todo: state.todoReducer })

const mapDispatchToProps = dispatch => 
  bindActionCreators({add, del, toggle}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodosListContainer);
