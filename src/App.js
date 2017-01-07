import React, { Component } from 'react';
import Jumbo from './components/Jumbo';
import Links from './components/Links';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Jumbo heading='LinkBot React Frontend' text='Creating links from post requests to https://linkbot-ytogugajwv.now.sh/links' />
        <Links />
        <Footer />
      </div>
    );
  }
}

export default App;
