import React from 'react';
import axios from 'axios';
import Form from './Form';

var Link = React.createClass({
  getInitialState: function() {
    return {
      links: [],
      poop: 'poop'
    }
  },

  foo: (word) => {
    alert(word);
  },

  addALink: () => {
    //alert(link);
    // var newLinks = this.state.links.slick();
    // newLinks.push(link);
    // this.setState({links: newLinks});
    var th = this;
    this.serverRequest = 
      axios.get("https://linkbot-wlfymorkum.now.sh/links")
        .then(function(result) {    
          th.setState({
            links: result.data,
            time: Date.now()
          });
        })
   },

  componentDidMount: function() {
    var th = this;
    this.serverRequest = 
      axios.get("https://linkbot-wlfymorkum.now.sh/links")
        .then(function(result) {    
          th.setState({
            links: result.data,
            time: Date.now()
          });
        })
  },
  
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var poop = 'poop';
    return (
      <div>
      <button onClick={this.foo.bind(this, poop)}>Alert?</button>
        <p>Last Updated: {this.state.time}</p>
        <h2>Links from API</h2>
        {this.state.links.map(function(link) {
          return (
            <div key={link.id} className="link">
              <p><a href={link.url}> {link.title}</a> votes: {link.votes} </p>
            </div>
          )
        })}
        <Form foo={this.foo} addALink={this.addALink} />
      </div>
    )
  }

})

export default Link;