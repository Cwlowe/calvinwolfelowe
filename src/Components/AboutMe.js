import React from 'react';
import Container from '@material-ui/core/Container';
import CalPhoto from '../img/20190526-Calvin_profile.jpg';
import {PicTextLayout} from './items.js';

export default function AboutMeContainer(){
  const aboutmeinfo = ["Hello my name is Calvin. I am a deveoper that develops and keeps on developing. I've been working on this website to showcase the different hobbies I enjoy and hope it sparks interest in other people."
  , "Some of my hobbies are hiking, fishing, photography, and playing videogames."];
    return(
      <Container fixed className="p-0">
          <PicTextLayout text={aboutmeinfo} imgsrc={CalPhoto} />
      </Container>
    );
}