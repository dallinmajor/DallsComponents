import React, { Component } from 'react';
import './App.css';
import BtnSubmit from './components/Buttons/BtnSubmit';

class App extends Component {
  onClickHandler = () => {
    console.log("hello world");
  }

  render() {
    return (
      <BtnSubmit clickEvent={this.onClickHandler}></BtnSubmit>
    );
  }
}

export default App;
