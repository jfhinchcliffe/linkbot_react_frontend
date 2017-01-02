import React, { Component } from 'react';
import logo from './logo.svg';
import Jumbo from './components/Jumbo';
import Link from './components/Link';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Jumbo heading='LinkBot React Frontend' text='Creating links from post requests to https://linkbot-wlfymorkum.now.sh/links!' />
        <Link />
        <Footer />
      </div>
    );
  }
}

export default App;
