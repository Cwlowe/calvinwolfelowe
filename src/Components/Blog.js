import React from "react";
import Container from '@material-ui/core/Container'
import Footer from './Footer.js';

export default function Blog(){
    const styles = {color:"black"};
    const height = {height:"20%"};
    return(
        <div>
        <Container maxWidth="md">
            <h1 style={styles} className="headerStyle text-center my-4 ">Under Construction. </h1>
            <p style={height}></p>
        </Container>
        <Footer/>
        </div>
    );

}