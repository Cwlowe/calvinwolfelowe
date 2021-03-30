import React from "react";
import Container from '@material-ui/core/Container'
import Footer from '../Templates/Footer';
// import BlogCard from '../Templates/BlogCard';
import BannerContainer from '../Templates/Banner';

export default function Blog(){
    const containerStyles = {color:"black"};
    // const blogStyles = {
    //     margin:"10vh",
    //     display:"inline"
    // }
    // const blogContent ={
    //     blog1: {
    //         header:"This is card1",
    //         paragraph:"Contents of the card"
    //     },
    //     blog2: {
    //         header:"This is card2",
    //         paragraph:"Contents of the card"
    //     }
    // }
    return(
        <div>
             <BannerContainer title={"Blog"} />
        <Container fixed style={{height:"33vh"}}>
            <h1 style={containerStyles} className="headerStyle text-center my-4 ">Under Construction. </h1>
            <div>
                {/* <BlogCard style={blogStyles} content={blogContent.blog1}></BlogCard>
                <BlogCard style={blogStyles} content={blogContent.blog2}></BlogCard> */}
            </div>
        </Container>
        <Footer/>
        </div>
    );

}