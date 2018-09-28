import React, { Component } from 'react';
import './App.scss';
import TodoBoard from './containers//TodoBoard/TodoBoard'

class App extends Component {
  render() {
    return (
      <div className="ToDos">
        <h1>To Do's</h1>
        <TodoBoard />
      </div>
    );
  }
}

export default App;
