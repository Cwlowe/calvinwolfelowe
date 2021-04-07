import React from 'react';
import '../styles/style.css';

//Content
import HomeContainer from './Pages/Home';
import AboutMeContainer from './Pages/AboutMe';
import Blog from './Pages/Blog';
import PhotoContainer from './Pages/Photography';
import errorPage from './Pages/404';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';

//Content section
export default function App(){
  console.log(process.env.PUBLIC_URL)
  return(
      <Router>
        <div className="tab-content" id="tabContent">
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/aboutme" component={AboutMeContainer}/>
            <Route path="/photography" exact component={PhotoContainer}/>
            <Route path="/blog" component={Blog}/>
            <Route component={errorPage}/>
          </Switch>
        </div>
      </Router>
  );
}
