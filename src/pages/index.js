import React from 'react';
// import ReactDOM from 'react-dom';
// //Content
import Home from '../components/home';
// import AboutMeContainer from './AboutMe';
// import Blog from './Blog';
// import PhotoContainer from './Photography';
// import errorPage from './404';
// import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
//Redux Store
import store from '../store';
import {Provider} from 'react-redux'

// import {ContentProvider} from './Components/Reducer/ContentContext.js';
function Index(props){

    return(
    <Provider store={store}>
        <div className="tab-content" id="tabContent">
          <Home props={props}/>
        </div>
    </Provider>    
    
    );
}
export default Index
