import React, { Component } from 'react';
import './css/calming.css'
import './App.css';
import Landing from './component/landing.js'
import Landing2 from './component/landing2.js'
import Landing3 from './component/landing3.js'

class App extends Component {
  render() {
    return (
      <div>
        <Landing/>
        <Landing2/>
        <Landing3/>
      </div>
    );
  }
}

export default App;
