import React from 'react'
import BannerContainer from '../Banner'; 
import Footer from '../Footer';
// import PageContainer from './Containers/pageLayout';

const errorPage = ()=>{
    const style = {
        height:"33vh",
    }
    return (
    <React.Fragment>
        <BannerContainer />
        <div style= {style}>
            <h1 className="h2Styling text-center m-4">404</h1>
            <h2 className="h2Styling text-center m-4">This page is not avaiable</h2>
        </div>
        <Footer/>
    </React.Fragment>
    )
}

export default errorPage;