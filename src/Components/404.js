import React from 'react'
import BannerContainer from './Banner'; 
import Footer from './Footer';
// import PageContainer from './Containers/pageLayout';

const errorPage = ()=>{
    const style = {
        height:"33vh",
    }
    return (
    <React.Fragment>
        <BannerContainer title={"404"} />
        <div style= {style}>
            <h2 className="h2Styling text-center m-4">This page is not avaiable</h2>
        </div>
        <Footer/>
    </React.Fragment>
    )
}

export default errorPage;