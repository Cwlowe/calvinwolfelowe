import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js'

function Index(){

    return(
    <App/>
    );
}
ReactDOM.render(<Index/>, document.getElementById('contentSection'));
