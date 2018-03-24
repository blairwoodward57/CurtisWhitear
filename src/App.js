import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import Header from './components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {router}
      </div>
    );
  }
}

export default App;
