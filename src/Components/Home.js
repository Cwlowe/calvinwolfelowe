import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './items.js';
import CalPhoto from '../img/20190526-Calvin_profile.jpg';
import {PicTextLayout} from './items.js';

//Home Section
export default function HomeContainer(){
  const aboutmeinfo = ["Hello my name is Calvin. I am a deveoper that develops and keeps on developing. I've been working on this website to showcase the different hobbies I enjoy and hope it sparks interest in other people."
  , "Some of my hobbies are hiking, fishing, photography, and playing videogames."];
    return(
      <div>
        <Header className="mb-3" title={"About Me"}/>
        <Container maxWidth="lg">
            <PicTextLayout text={aboutmeinfo} imgsrc={CalPhoto} />
        </Container>
      </div>
    );
}
