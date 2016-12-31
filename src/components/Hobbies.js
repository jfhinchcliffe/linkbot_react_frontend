import React from 'react'

var Hobbies = React.createClass({
  render: function(){
    var hobbies = this.props.hobbyList.map(function(hobby, index){
      return (<li key={index}>{hobby}</li>);
    });
    return(
      <div>
        <h5>My Hobbies</h5>
        <ul>
          {hobbies}
        </ul>
      </div>  
    );
  }
});

export default Hobbies;