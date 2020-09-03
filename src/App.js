import React, { Component } from 'react'
import Quiz from './Quiz.js'
import './App.css'
import quiz_questions from'./quiz_data.json'


class App extends Component {
  render() {
    return (
      <div>
        <Quiz quiz_questions = {quiz_questions} />
      </div>
    )
  }
}

export default App
