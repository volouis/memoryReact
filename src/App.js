import React, { Component } from 'react';
import Head from "./components/header";
import Jumbo from "./components/jumbotron";
import Card from "./components/cards"
import friends from "./friends.json";
import Wrapper from "./components/wrapper"
import './App.css';

class App extends Component {
  state = {
    friends,
    count: 0,
    highScore: 0,
    guess: ""
  }

  beenClick = id => {
    console.log(this.state.friends.findIndex(x => x.id === id));

    if(this.state.friends[this.state.friends.findIndex(x => x.id === id)].hit){
      this.restartGame();
      this.setState({guess: "Wrong"});
    }else{
      this.state.friends[this.state.friends.findIndex(x => x.id === id)].hit = true;
      this.setState((preState, props) => ({
        count: preState.count + 1
      }), () => {
        if(this.state.highScore < this.state.count){
          this.setState({highScore: this.state.count});
        }
        this.setState({guess: "Right"});
        this.cardRandomizer();
      })
    }
  }

  restartGame(){
    this.state.friends.forEach(element => {
      element.hit = false;
    });
    this.setState({count : 0});
    this.cardRandomizer();
  }

  cardRandomizer(){
    let newList = [];
    let justHere = this.state.friends.splice(0);

    for(let i = 0; i < justHere.length; i++){
      let ran = Math.floor(Math.random() * Math.floor(justHere.length))
      newList.push(justHere[ran])
      justHere.splice(ran, 1)
      i--;
    }
    this.setState({friends: newList})
  }

  render() {
    return (
      <div className="App">
        <Head
          count = {this.state.count}
          highScore = {this.state.highScore}
          guess = {this.state.guess}
        />
        <Jumbo/>
        <Wrapper>
          {this.state.friends.map(friends => (
            <Card
              key = {friends.id}
              id = {friends.id}
              image = {friends.image}
              beenClick = {this.beenClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
