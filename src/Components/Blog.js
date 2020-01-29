import React from "react";
import Container from '@material-ui/core/Container'
import Footer from './Footer.js';

export default function Blog(){

    return(
        <div>
        <Container maxWidth="md">
            <p> This is the blog section</p>
        </Container>
        <Footer/>
        </div>
        

    );

}