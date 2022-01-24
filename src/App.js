import React, { Component } from 'react';
import './index.css';
import './components/score';

class App extends Component {
  state = {
    questions: [],
    question: {},
    toggle: false,
    score: 0
  }

  decrement = () => {
    if (this.state.score > this.state.question.value) {
      this.setState({ score: this.state.score - this.state.question.value })

    } else {
      alert('you lost')
    }

  }

  handleClick = () => {
    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => {
        console.log(data[0])
        this.setState({ question: data[0] })
      })
      //.then(() => console.log(this.state.question))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <>
        <div id='whole-container'>
          <h1 id='greeting'>Let's play</h1>
          <button id='submit' type="submit" onClick={this.handleClick}>Get Question</button>
          <div id='container'>

            <h1>Question: {this.state.question.question}</h1>
            <h2>Category: {this.state.question.category?.title}</h2>
            <h3>Points: {this.state.question.value}</h3>
          </div>

          <button id='toggle' onClick={() => this.setState({ toggle: !this.state.toggle })}>Reveal Answer</button>

          {
            this.state.toggle ? <h1>answer:{this.state.question.answer}</h1> : null
          }
          <div>
            <h2>score: {this.state.score}</h2>
            <button id='increment' onClick={() => this.setState({ score: this.state.score + this.state.question.value })}>increment</button>
            <button id='decrement' onClick={this.decrement}>decrement</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
