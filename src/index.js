import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import PhotoContainer from './Components/Photography.js';
import HomeContainer from './Components/Home.js';
import AboutmeContainer from './Components/AboutMe.js';
import Navbar from './Components/navbar.js';

//Content section
export default class Content extends React.Component{
  constructor(props){
    super(props)
    this.state={
      currentTab:"0"
    }
  }
  getID = (id) =>{
    this.setState({currentTab:id})
  }

  render(){
    const content = [<HomeContainer/>,<AboutmeContainer/>,<PhotoContainer/>];
    return(
      <div className="tab-content" id="tabContent">
      <Navbar getID={this.getID}/>
      {content[this.state.currentTab]}
    	</div>
    );
  }
}

ReactDOM.render(<Content/>, document.getElementById('contentSection'));
