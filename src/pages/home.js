import React from 'react';
import Container from '@material-ui/core/Container';
import Footer from '../templates/Footer';
import BannerContainer from '../templates/Banner';

//Material-ui
import Grid from '@material-ui/core/Grid';
//Gatsby
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//Home Section
const HomeContainer= ()=>{
  const data = useStaticQuery(graphql`
  query{
    homePhoto: allFile(
      filter: {relativeDirectory: {eq: "home"}, extension: {regex: "/(jpg)|(jpeg)/"}}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(fit: CONTAIN) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`)
  const content = {
    0:{
      image: "./20191020-Aboutme.jpg",
      text: "About me",
      url:"/aboutme"
    },
    1:{
      image: "../images/Photography.jpg",
      text:"Photography",
      url:"/photography"
    },
    2:{
      image: "../imgages/blog.jpg",
      text:"Blogs",
      url:"/blog"
    }
  };
  //Tapping into the context reducer
  // const value = useContext(ContentContext);
  // let Btitle = value.currentContent[0].title;
    return(
      <div>
        {/* <BannerContainer title={"Home"} /> */}
        <Container className="p-0 homeBack1" maxWidth="lg">
        <Grid className="" container style={{flex: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
          {data?
              data.homePhoto.edges.map((image) => (
                <Grid className="hello" item xs={12} sm={6} md={4} align="center" key = {image.node.id}>
                  <Img 
                    alt={image.node.base} 
                    fluid={image.node.childImageSharp.fluid}
                  />
                </Grid> 
              )):
              null
          }
        </Grid>
        </Container>
        <Footer/>
      </div>
    );
}
export default HomeContainer

