import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js'

import {ContentProvider} from './Components/Reducer/ContentContext.js';
function Index(){

    return(
    <ContentProvider>
        <App/>
    </ContentProvider>    
    
    );
}
ReactDOM.render(<Index/>, document.getElementById('contentSection'));
