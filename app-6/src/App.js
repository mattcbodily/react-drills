import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: ['sweep', 'mop', 'vacuum'],
      userInput: ''
    }
    this.handleNewItem = this.handleNewItem.bind(this)
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  handleNewItem(){
    this.setState({
      todo: [...this.state.todo, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    let todo = this.state.todo.map((element, index) => {
      return (
        <Todo key={index} task={element}/>
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input 
            onChange = {(e) => this.handleChange(e.target.value)} 
            placeholder = 'Enter new task'/>
          <button onClick = {this.handleNewItem}>Add</button>
        </div>
        <br />
        {todo}
      </div>
    );
  }
}

export default App;
