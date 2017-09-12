import React, { Component } from 'react';
import './stylesheets/style.css'

import Background from './components/background';

        // <Background />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <p>Star War</p>
      </div>
    );
  }
}

export default App;
