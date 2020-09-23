import React,{useContext} from "react";
import Container from '@material-ui/core/Container'
import Footer from './Footer';
import BlogCard from './BlogCard';
import BannerContainer from './Banner.js'; 
import {ContentContext} from './Reducer/ContentContext.js';

export default function Blog(){
    const containerStyles = {color:"black"};
    const blogStyles = {
        margin:"10vh",
        display:"inline"
    }
    const blogContent ={
        blog1: {
            header:"This is card1",
            paragraph:"Contents of the card"
        },
        blog2: {
            header:"This is card2",
            paragraph:"Contents of the card"
        }
    }
    const value = useContext(ContentContext);
    let Btitle = value.currentContent[0].title;
    return(
        <div>
             <BannerContainer title={Btitle} />
        <Container maxWidth="md">
            <h1 style={containerStyles} className="headerStyle text-center my-4 ">Under Construction. </h1>
            <div>
                <BlogCard style={blogStyles} content={blogContent.blog1}></BlogCard>
                <BlogCard style={blogStyles} content={blogContent.blog2}></BlogCard>
            </div>
        </Container>
        <Footer/>
        </div>
    );

}