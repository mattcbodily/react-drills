import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      colors: ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Gray', 'Burgundy', 'Black']
    }
  }
  render() {
    let colorsList = this.state.colors.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )})
    return (
      <div className="App">
        {colorsList}
      </div>
    );
  }
}

export default App;
