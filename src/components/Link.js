import React from 'react';
import axios from 'axios';

var Link = React.createClass({
  getInitialState: function() {
    return {
      links: [],
      poop: 'poop'
    }
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
      </div>
    )
  }

})

export default Link;

// })
// export default function Link({ heading, text }){
//   getInitialState: function() {
//     return {
//       links: [],
//       poop: 'poop'
//     }
//   }
//   function handleClick(e){
//     e.preventDefault();
//     console.log('Button pressed');
//     axios.get("https://linkbot-wlfymorkum.now.sh/links")
//     .then(function(result) {
//       console.log(result.data[1]);
//     });
//   }
//   return (
//     <div className="jumbotron">
//       <h1>Snoop</h1>
//       <p> a loop </p>
//       <button onClick={handleClick}></button>
//     </div>
//   )
// }