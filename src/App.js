import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  // add a property to our component state object
  state = {
    userInput: '',
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value.trim() })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <p className="echo">Echo:</p>
          <p>{this.state.userInput}</p>
        </div>
      </div>
    )
  }
}

export default App
