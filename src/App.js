import React, { Component } from 'react';
import TodoContainer from './containers/TodoContainer';
import './app.css';

class App extends Component {
  render() {
    return (
      <section className="appContainer">
        <h1>TODO LIST</h1>
        <TodoContainer />
      </section>
    );
  }
}

export default App;
