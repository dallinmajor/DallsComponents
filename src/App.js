import React, { Component } from 'react';
import ModalPrimary from './components/Modals/Primary';
import './App.css';
import BtnSubmit from './components/Buttons/BtnSubmit';

class App extends Component {
  onClickHandler = () => {
    console.log("hello world");
  }

  render() {
    return (
      <div>
        <ModalPrimary>
          <h1>HelloWorld</h1>
          <hr />
          <p>This Coen brothers' hilariously twisted and irreverent cult comedy-thriller stars Jeff Bridges, John Goodman,
             Steve Buscemi and Julianne Moore. Join the "Dude" and his bowling buddies on their journey that blends unforgettable
              characters, kidnapping, a case of mistaken identity and White Russians. Enter the visually unique and entertaining 
              world from the creative minds of the Coen brothers and remember: the Dude abides.
              This Coen brothers' hilariously twisted and irreverent cult comedy-thriller stars Jeff Bridges, John Goodman,
             Steve Buscemi and Julianne Moore. Join the "Dude" and his bowling buddies on their journey that blends unforgettable
              characters, kidnapping, a case of mistaken identity and White Russians. Enter the visually unique and entertaining 
              world from the creative minds of the Coen brothers and remember: the Dude abides.
              This Coen brothers' hilariously twisted and irreverent cult comedy-thriller stars Jeff Bridges, John Goodman,
             Steve Buscemi and Julianne Moore. Join the "Dude" and his bowling buddies on their journey that blends unforgettable
              characters, kidnapping, a case of mistaken identity and White Russians. Enter the visually unique and entertaining 
              world from the creative minds of the Coen brothers and remember: the Dude abides.
          </p>
          <BtnSubmit clickEvent={this.onClickHandler} text="Primary"></BtnSubmit>
        </ModalPrimary>
      </div>
    );
  }
}

export default App;
