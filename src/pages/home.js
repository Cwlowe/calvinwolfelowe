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
//CSS
import * as container from "../styles/container.module.css";
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
            fluid(fit: COVER,maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
            gatsbyImageData(height: 200, width: 200)
          }
        }
      }
    }
  }
`)
  //Tapping into the context reducer
  // const value = useContext(ContentContext);
  // let Btitle = value.currentContent[0].title;
    return(
      <div>
        {/* <BannerContainer title={"Home"} /> */}
        <Container className={container.section} maxWidth="lg">
        <Grid className={container.imageCardContainer} container spacing={4}>
          {data?
              data.homePhoto.edges.map((image) => (
                <Grid className={container.imageCard} item xs={12} sm={3} md={4} key = {image.node.id}>
                  <Img
                  className={container.image}
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

