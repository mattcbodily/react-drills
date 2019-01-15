import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      colors : ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Gray', 'Burgundy', 'Black'],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  render() {
    let filteredColors = this.state.colors.filter((element, index) => {
      return element.includes(this.state.userInput)
    });
    let listedColors = filteredColors.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })
    return (
      <div className="App">
        <input onChange = {(e) => this.handleChange(e.target.value)}/>
        {listedColors}
      </div>
    );
  }
}

export default App;
