import React from 'react';

export default class Header extends React.Component{

  render(){
    return(
      <h1 className="text-center my-4 mx-1 mx-md-0 headerStyle fontStyling"> {this.props.title} </h1>
    );
  }
}
