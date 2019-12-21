import React from 'react';
// import Content from '../index.js';

//Navbar section
export default class Navbar extends React.Component{

  setTab = (id) =>{
    this.props.getID(id)
  }

  render(){
    return(
      <div className="navBar">
        <div>
          <Navitems setTab={this.setTab} id="0" href="#homeSection" text="Home"  />
          <Navitems setTab={this.setTab} id="1" href="#aboutme" text="About Me"  />
          <Navitems setTab={this.setTab} id="2" href="#photography" text="Photography"  />
        </div>
      </div>
    );
  };
}
// Navitems
class Navitems extends React.Component{


  render(){

    return(
        <button id={this.props.id} className="navTabs headerFontStyling m-2" data-toggle="tab" role="tab" aria-controls="homeSection" aria-selected="true" onClick={() => this.props.setTab(this.props.id)}>{this.props.text}</button>
    );
  }

}
