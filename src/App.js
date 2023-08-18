import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

// import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
    <NavBar/>
    <News/>
      </div>
    )
  }
}


