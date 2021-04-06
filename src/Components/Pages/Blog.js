import React, { useEffect } from "react";
import Container from '@material-ui/core/Container'
import Footer from '../Templates/Footer';
// import BlogCard from '../Templates/BlogCard';
import BannerContainer from '../Templates/Banner';
import { makeStyles } from "@material-ui/core";
import {fetchPhoto} from "../Store/photography_reducer";
import { useDispatch, useSelector } from "react-redux";

let useStyles = makeStyles(()=>({
    root:{

    },
    mainBlogContainer:{
        display:"flex",
        justifyContent:"center",
        maxHeight:"100%",
        maxWidth:"100%"
    }
}))
export default function Blog(){
    const classes = useStyles()
    let blogContent = {
        header:"React + three.js",
        paragraph:"Learn about react with three js with this blog post.",
        location:"misc/react+threejs.jpeg",
        url:"https://calvinwolfelowe.medium.com/react-hooks-3js-418a2fde3949"
    }
    return(
        <div>
             <BannerContainer title={"Blog"} />
        <Container fixed className={classes.root}>
            <div className={classes.mainBlogContainer}>
                <BlogCard content={blogContent}></BlogCard>
            </div>
        </Container>
        <Footer/>
        </div>
    );
}
const useBlogStyles = makeStyles(()=>({
    blogContainer:{
        height:"40%",
        width:"40%",
        border:"solid black 1px",
        borderRadius:"5%",
        margin:"10vh 5vh 10vh 5vh",
        boxShadow:"5px 5px #aaaaaa",
    },
    pStyles:{
        textAlign:"center",
        fontFamily:"lobster,cursive",
        margin:"7%"
    },
    hStyles:{
        textAlign:"center",
        fontFamily:"lobster,cursive",
        margin:"7%"
    },
    imageStyles:{
        maxWidth:"100%",
        maxHeight:"100%",
        borderRadius:"5%",
        objectFit:"contain"
    }
}))
const BlogCard = (props) =>{
    let classes = useBlogStyles()
    let dispatch = useDispatch()
    let image = useSelector(state=>state.state.photoURL)
    useEffect(()=>{
        const getPhoto=async ()=>{
            await dispatch(fetchPhoto(props.content.location))
        }
        getPhoto()
    },[dispatch])
    return(
        <div className ={classes.blogContainer}>
            {image ? 
                <a href={props.content.url}><img className={classes.imageStyles} src={image.url}/></a>:<></>
            }
            <h2 className={classes.hStyles}>{props.content.header}</h2>
            <p className={classes.pStyles}>{props.content.paragraph}</p>
        </div>
    );
}