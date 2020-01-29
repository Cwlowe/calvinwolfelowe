import React, {useContext} from 'react';
import '../index.css';


//Conent
import HomeContainer from './Home.js';
import AboutMeContainer from './AboutMe';
import Blog from './Blog.js';
import PhotoContainer from './Photography.js';

import BannerContainer from './Banner.js'; 

//import AboutmeContainer from './Components/AboutMe.js';
import {ContentContext} from './Reducer/ContentContext.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Content section
export default function App(){
  const value = useContext(ContentContext);

  return(
      <Router>
        <div className="tab-content" id="tabContent">
          <BannerContainer title={value.currentContent[0].title} />
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/calvinwolfelowe/" component={HomeContainer}/>
            <Route path="/aboutme" component={AboutMeContainer}/>
            <Route path="/photography" component={PhotoContainer}/>
            <Route path="/blog" component={Blog}/>
          </Switch>
        </div>
      </Router>
      
  );
}
