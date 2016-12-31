import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postToAPI = this.postToAPI.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.state.title = this.refs.title.value;
    this.state.url = this.refs.url.value;
    //this.setState({title: this.refs.title.value, url: this.refs.url.value});
    axios.post("https://linkbot-wlfymorkum.now.sh/links", {
      title: this.state.title,
      url: this.state.url
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });  
    
    alert(`A thing was submitted: ${this.state.url} ${this.state.title} `);
  }

  postToAPI() {

    axios.post("https://linkbot-wlfymorkum.now.sh/links", {
      firstName: this.state.title,
      lastName: this.state.url
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });   
    alert(`Axios should have posted`);  
  }   

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          Title:
          <input type="text" ref="title"  />
          URL:
          <input type="text" ref="url"  />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;