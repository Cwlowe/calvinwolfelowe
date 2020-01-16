import React from 'react';
import Container from '@material-ui/core/Container';
import CalPhoto from '../img/20190526-Calvin_profile.jpg';
import UCSCicon from '../img/UCSC IMAGE.png';
import {PicTextLayout} from './items.js';
import {RPicTextLayout} from './items.js';

export default function AboutMeContainer(){
  const aboutmeInfo = ["Hello my name is Calvin. My passion for web development led me to create this website. I want to showcase the different hobbies I enjoy and hope it sparks interest in other people.",
  "Some hobbies I enjoy are hiking, fishing, photography, and playing videogames.",
  ];
  const collegeInfo = ["Graduated from University of California Santa Cruz with a BS in Computer Science."];
    return(
      <Container fixed className="p-0">
          <PicTextLayout text={aboutmeInfo} imgsrc={CalPhoto} />
          <RPicTextLayout text={collegeInfo} imgsrc={UCSCicon} />
      </Container>
    );
}