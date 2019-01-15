import React, { Component } from 'react';
import './App.css';
import NewTask from './Components/NewTask';
import List from './Components/List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: ['sweep', 'mop', 'vacuum', 'exercise']
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({todo: [...this.state.todo, task]})
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.todo} />
      </div>
    );
  }
}

export default App;
