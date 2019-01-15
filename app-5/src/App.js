import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image theImage = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYSlhRabWiNdxAwvJybUaMSzg7rOSemkYUMF0pvC2DH1SsKjZFw'}/>
      </div>
    );
  }
}

export default App;
