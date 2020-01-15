import React from 'react';
import { Container } from '@material-ui/core';
import { HeaderTextLayout } from './items.js';

import img1 from '../img/Hawaii1.jpg';
import img2 from '../img/Hawaii2.jpg';
import img3 from '../img/Hawaii3.jpg';
import img4 from '../img/Hawaii4.jpg';
import img5 from '../img/Hawaii5.jpg';
import img6 from '../img/flock-of-birds-917494.jpg';


// import Content from '../index.js';

//Photography Section
export default function PhotoContainer(){
  const content = [img1, img2, img3, img4, img5, img6];

  return(
    <Container maxWidth="lg">
      <HeaderTextLayout content={content} title="hello"/>
    </Container>
  );
}
