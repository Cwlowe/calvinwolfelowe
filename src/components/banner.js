import React from 'react';
import Navbar from './navbar';
import Header from './items';
import { Container, makeStyles } from '@material-ui/core';
import * as styles from "../styles/banner.module.css"

//Gatsby
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles({
bannerStyles:{
    backgroundColor: "#94a5c4",
    backgroundImage: `url(../imgages/clouds-conifer-daylight-environment-629162.jpg)`,
    backgroundRepeat: "space",
    backgroundSize: "cover",
    height:"60%",
},

});

export default function Banner({title, updateContent}){
    const classes = useStyles();
    const data = useStaticQuery(graphql`
    query{
        banner: allFile(
        filter: {relativeDirectory: {eq: "banner"}, extension: {regex: "/(jpg)|(jpeg)/"}}
        ) {
        edges {
            node {
            id
            base
            childImageSharp {
                fluid(fit: FILL) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }
        }
    }
    `)
    const image = data ? data.banner.edges[0].node.childImageSharp.fluid : ""
    return(
        <div className={classes.bannerStyles}>
            <Img
            className={styles.image}
            fluid={image}
            >
            <Navbar updateContent={updateContent}/>
            <Header title={title}/>
            </Img>
        </div>
    );
}