import React from 'react';
import axios from 'axios';

var Form = React.createClass({
  getInitialState: () => {
    return { title: '',
             url: ''         
    }
  },

  handleSubmit: function (e) {  
    e.preventDefault();
    this.postToAPI(this.refs.title.value, this.refs.url.value);
    this.props.addLink();
    this.cleanFields();
  },

  postToAPI: function(title, url) {
    axios.post("https://linkbot-ytogugajwv.now.sh/links", {
      title: title,
      url: url
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });
  },

  cleanFields: function() {
    this.refs.title.value = '';
    this.refs.url.value = '';
  },


  render: function () {
    return (
      <div>
        Enter New Link 
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="title" />
          <input type="text" ref="url" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

})

export default Form;