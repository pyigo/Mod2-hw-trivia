import React, { Component } from 'react';
import './index.css';

class App extends Component {
  state = {
    questions: [],
    question: {}

  }
  // componentDidMount() {
  //   fetch('http://jservice.io/api/random')
  //     .then(response => response.json())
  //     .then(data => this.setState({ questions: data }))
  //     .then(() => console.log(this.state.questions))
  //     .catch(error => console.error(error))
  // }

  handleClick = () => {
    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ question: data })
      })
      //.then(() => console.log(this.state.question))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <>
        <h1 id='greeting'>Let's play</h1>
        <button type="submit" onClick={this.handleClick}>Get Question</button>
        <div id='container'>
          <h1>Question: {this.state.question.name}</h1>
          <h2>Category: {this.state.question.category}</h2>
          <h3>Points: {this.state.question.points}</h3>
        </div>
      </>
    );
  }
}

export default App;
