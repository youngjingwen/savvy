import  React, { Component } from 'react'
import { Link } from 'react-router'
import '../css/main.css'

class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default App
