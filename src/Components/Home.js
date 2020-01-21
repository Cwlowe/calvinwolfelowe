import React from 'react';
import Container from '@material-ui/core/Container';
import {HeaderTextLayout} from './items.js';
import img1 from "../img/20191020-Aboutme.jpg";
import img2 from "../img/Photography.jpg";
import img3 from "../img/blog.jpg";

//Home Section
export default function HomeContainer(){
  const content = {
    0:{
      image: img1,
      text: "About me",
      url:"/aboutme"
    },
    1:{
      image: img2,
      text:"Photography",
      url:"/photography"
    },
    2:{
      image: img3,
      text:"Blogs",
      url:"/blog"
    }
  };
    return(
      <Container className="p-0 homeBack1" maxWidth="lg">
          <HeaderTextLayout content={content} title="Hello!"/>
      </Container>
    );
}
