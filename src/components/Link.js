import React from 'react';
import axios from 'axios';
import Form from './Form';

var Link = React.createClass({
  getInitialState: function() {
    return {
      links: [],
      poop: 'poop', 
      time: 'Unknown'
    }
  },

  foo: (word) => {
    alert(word);
  },

  componentDidMount: function() {
    var th = this;
    this.serverRequest = 
      axios.get("https://linkbot-wlfymorkum.now.sh/links")
        .then(function(result) {    
          th.setState({
            links: result.data,
            time: Date()
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
        Link State
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        Link Props
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }

})

export default Link;