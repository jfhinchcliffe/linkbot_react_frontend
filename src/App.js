import React, { Component } from 'react';
import logo from './logo.svg';
import Jumbo from './components/Jumbo';
import Link from './components/Link';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Title </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        This is the data being passed via props.
        <li>{ this.props.profileData.name }</li>
        <li>{ this.props.profileData.imgURL }</li>
        <li>{ this.props.profileData.hobbyList }</li>
        
        <Jumbo heading='my heading' text='this is some text, suckah!' />
        
        <Link />

        <Hobbies hobbyList={this.props.profileData.hobbyList} />
        <Footer />
      </div>
    );
  }
}

export default App;
