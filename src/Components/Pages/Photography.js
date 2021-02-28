import React, {useContext} from 'react';
import { Container } from '@material-ui/core';
import { HeaderTextLayout } from '../Templates/items';
import BannerContainer from '../Templates/Banner'; 
import {ContentContext} from '../Reducer/ContentContext';

import Footer from '../Templates/Footer';

// import Content from '../index.js';

//Photography Section
export default function PhotoContainer(){
  const content = {
    0:{
      image:"/img/Hawaii1.jpg",
    },
    1:{
      image:"/img/Hawaii2.jpg",
    },
    2:{
      image:'/img/Hawaii3.jpg',
    },
    3:{
      image:'/img/Hawaii4.jpg',
    },
    4:{
      image:'/img/Hawaii5.jpg',
    },
    5:{
      image:'/img/flock-of-birds-917494.jpg',
    }
  }
  const value = useContext(ContentContext)
  let Btitle = value.currentContent[0].title;

  return(
    <div>
      <BannerContainer title={Btitle} />
    <Container maxWidth="lg">
      <HeaderTextLayout content={content} title=""/>
    </Container>
    <Footer/>
    </div> 
  );
}
