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
  }


  handleSubmit(event) {
    event.preventDefault();
    var title = this.refs.title.value;
    var url = this.refs.url.value;
    this.setState({title: title, url: url});
    axios.post("https://linkbot-wlfymorkum.now.sh/links", {
      title: title,
      url: url
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });  
    // this.props.addALink();
    // alert(`A thing was submitted: ${this.state.url} ${this.state.title} `);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.addALink.bind(this)}>AddALink!</button>
        <form onSubmit={this.handleSubmit}>
            Title:
            <input type="text" ref="title"  />
            URL:
            <input type="text" ref="url"  />
          <input type="submit" value="Submit" />
        </form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>  
    );
  }
}

export default Form;