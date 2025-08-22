import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'

export default class App extends Component {
  c = 'Maaz dewana'
  render() {
    return (
       <div>
        <Navbar/>
       </div>
    )
  }
}

