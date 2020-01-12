import React, {useState} from 'react'
import Navbar from './navbar.js';
import Header from './items.js';
import { Container } from '@material-ui/core';

export default function BannerContainer({content, updateContent}){
    return(
        <div className="bannerStyles">
        <Navbar updateContent={updateContent}/>
        <Container className="mt-5 pt-4 mt-md-5 pd-md-5 mt-lg-2 pt-lg-0 px-0 ">
            <Header title={content}/>
        </Container>
        </div>
    );
}