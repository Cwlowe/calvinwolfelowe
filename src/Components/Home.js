import React from 'react';
import Container from '@material-ui/core/Container';
import {HeaderTextLayout} from './items.js';
import img1 from "../img/20191020-Aboutme.jpg";
import img2 from "../img/Photography.jpg";
import img3 from "../img/blog.jpg";

//Home Section
export default function HomeContainer(){
  
  const content= {
    copy1:img1,
    copy2:img2,
    copy3:img3
  }
    return(
      <Container className="p-0 homeBack1" maxWidth="lg">
          <HeaderTextLayout content={content}/>
      </Container>
    );
}
