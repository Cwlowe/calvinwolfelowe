import React from 'react';
// import ReactDOM from 'react-dom';
// //Content
import Home from './home';
// import AboutMeContainer from './AboutMe';
// import Blog from './Blog';
// import PhotoContainer from './Photography';
// import errorPage from './404';
// import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
//Redux Store
import store from '../store';
import {Provider} from 'react-redux'

// import {ContentProvider} from './Components/Reducer/ContentContext.js';
function Index(){

    return(
    <Provider store={store}>
        <div className="tab-content" id="tabContent">
          <Home/>
        </div>
    </Provider>    
    
    );
}
export default Index
