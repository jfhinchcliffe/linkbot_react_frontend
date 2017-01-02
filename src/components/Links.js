import React from 'react';
import axios from 'axios';
import Form from './Form';

var Links = React.createClass({
  getInitialState: function() {
    return {
      links: [],
      time: 'Unknown'
    }
  },

  foo: (word) => {
    alert(word);
  },

  addLink: function(title, url) {
    this.linkList();
  },

  componentDidMount: function() {
    this.linkList();
  },

  linkList: function() {
    var th = this;
    this.serverRequest = 
      axios.get("https://linkbot-ytogugajwv.now.sh/links")
        .then(function(result) {    
          th.setState({
            links: result.data,
            time: Date()
          });
        })
  }, 

  render: function() {
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
        <Form addLink={this.addLink} />
        Link State
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        Link Props
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }

})

export default Links;