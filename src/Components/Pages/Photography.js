import React, {useContext} from 'react';
import { Container } from '@material-ui/core';
import { HeaderTextLayout } from '../Templates/items';
import BannerContainer from '../Templates/Banner'; 
import {ContentContext} from '../Reducer/ContentContext';

import img1 from '../../img/Hawaii1.jpg';
import img2 from '../../img/Hawaii2.jpg';
import img3 from '../../img/Hawaii3.jpg';
import img4 from '../../img/Hawaii4.jpg';
import img5 from '../../img/Hawaii5.jpg';
import img6 from '../../img/flock-of-birds-917494.jpg';
import Footer from '../Templates/Footer';

// import Content from '../index.js';

//Photography Section
export default function PhotoContainer(){
  const content = {
    0:{
      image:img1,
    },
    1:{
      image:img2,
    },
    2:{
      image:img3,
    },
    3:{
      image:img4,
    },
    4:{
      image:img5,
    },
    5:{
      image:img6,
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
