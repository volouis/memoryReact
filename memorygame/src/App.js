import React, { Component } from 'react';
import Head from "./components/header";
import Jumbo from "./components/jumbotron";
import Card from "./components/cards"
import friends from "./friends.json";
import Wrapper from "./components/wrapper"
import './App.css';

class App extends Component {
  state = {
    friends
  }

  render() {
    return (
      <div className="App">
        <Head/>
        <Jumbo/>
        <Wrapper>
          {this.state.friends.map(friends => (
            <Card
              image = {friends.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
