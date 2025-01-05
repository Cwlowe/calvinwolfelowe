import React from 'react';
import Navbar from './navbar';
import Header from './items';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
bannerStyles:{
    backgroundColor: "#94a5c4",
    backgroundImage: `url(../../img/clouds-conifer-daylight-environment-629162.jpg)`,
    backgroundRepeat: "space",
    backgroundSize: "cover",
    height:"60%",
},

});

export default function BannerContainer({title, updateContent}){
    const classes = useStyles();
    return(
        <div className={classes.bannerStyles}>
        <Navbar updateContent={updateContent}/>
        <Container className="mt-5 pt-4 mt-md-5 pd-md-5 mt-lg-2 pt-lg-0 px-0 ">
            <Header title={title}/>
        </Container>
        </div>
    );
}