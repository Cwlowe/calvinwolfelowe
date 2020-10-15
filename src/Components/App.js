import React from 'react';
import '../styles/style.css';

//Conent
import HomeContainer from './Pages/Home';
import AboutMeContainer from './Pages/AboutMe';
import Blog from './Pages/Blog';
import PhotoContainer from './Pages/Photography';
import errorPage from './Pages/404';

//import AboutmeContainer from './Components/AboutMe.js';
// import {ContentContext} from './Reducer/ContentContext.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Content section
export default function App(){
  
  return(
      <Router basename={process.env.PUBLIC_URL}>
        <div className="tab-content" id="tabContent">
          {/* <BannerContainer title={value.currentContent[0].title} /> */}
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            {/* <Route path="/calvinwolfelowe/" component={HomeContainer}/> */}
            <Route path="/aboutme" component={AboutMeContainer}/>
            <Route path="/photography" component={PhotoContainer}/>
            <Route path="/blog" component={Blog}/>
            <Route path='/404' component={errorPage}/>
          </Switch>
        </div>
      </Router>
  );
}
