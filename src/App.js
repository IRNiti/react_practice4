import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const numQuestions = 0;
//const numCorrect = 0;

class App extends Component {
  
  state = {
  	numQuestions : 0,
    numCorrect : 0,
    value1 : Math.floor(Math.random() * 100),
	value2 : Math.floor(Math.random() * 100),
	value3 : Math.floor(Math.random() * 100),
    proposedAnswer: Math.floor(Math.random() * 3)
  }

  verifyGuess = (guess) => {
    let actualValue = this.state.value1 + this.state.value2 + this.state.value3;
    let fullProposedAnswer = this.state.proposedAnswer + this.state.value1 + this.state.value2 + this.state.value3;
    console.log(`Proposed: ${fullProposedAnswer}`);
    console.log(`Actual: ${actualValue}`);
    let correctToIncrement = 0;
    if((actualValue === fullProposedAnswer) === guess){
        correctToIncrement = 1;
    }
  	this.setState((currentState) =>({
    	numQuestions : currentState.numQuestions +1,
      	numCorrect : currentState.numCorrect + correctToIncrement,
      	value1 : Math.floor(Math.random() * 100),
		value2 : Math.floor(Math.random() * 100),
		value3 : Math.floor(Math.random() * 100),
    	proposedAnswer: Math.floor(Math.random() * 3)
    }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer + this.state.value1 + this.state.value2 + this.state.value3}`}</p>
          </div>
          <button onClick={() => this.verifyGuess(true)}>True</button>
          <button onClick={() => this.verifyGuess(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
