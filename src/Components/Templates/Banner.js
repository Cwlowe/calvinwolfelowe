import React from 'react'
import Navbar from './navbar';
import Header from './items';
import { Container } from '@material-ui/core';

export default function BannerContainer({title, updateContent}){
    return(
        <div className="bannerStyles">
        <Navbar updateContent={updateContent}/>
        <Container className="mt-5 pt-4 mt-md-5 pd-md-5 mt-lg-2 pt-lg-0 px-0 ">
            <Header title={title}/>
        </Container>
        </div>
    );
}