import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz'
import quiz_questions from'./quiz_data.json'

const loadData = () => JSON.parse(JSON.stringify(quiz_questions));
class App extends Component {
  render() {
    return (
      <div>
        <Quiz quiz_questions = {loadData()} />
      </div>
    )
  }
}

export default App
