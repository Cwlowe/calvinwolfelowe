import React from 'react'
import BannerContainer from '../Templates/Banner'; 
import Footer from '../Templates/Footer';
// import PageContainer from './Containers/pageLayout';

const errorPage = ()=>{
    return (
    <React.Fragment>
        <BannerContainer />
        <div className="errorBoxContainer">
            <div className="errorBox">
                <div className="h1Styling text-center m-4">
                    <i className="fas fa-exclamation-triangle"></i> 
                </div>
                <h1 className="h1Styling text-center m-4">404</h1>
                <h2 className="h2Styling text-center m-4">This page is not avaiable</h2>
            </div>
            
        </div>
        <Footer/>
    </React.Fragment>
    )
}

export default errorPage;