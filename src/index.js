import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js'
//Redux Store
import store from './Components/Store/';
import {Provider} from 'react-redux'

// import {ContentProvider} from './Components/Reducer/ContentContext.js';
function Index(){

    return(
    <Provider store={store}>
        <App/>
    </Provider>    
    
    );
}
ReactDOM.render(<Index/>, document.getElementById('contentSection'));
