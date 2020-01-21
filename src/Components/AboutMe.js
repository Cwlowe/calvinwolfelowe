import React from 'react';
import Container from '@material-ui/core/Container';
import CalPhoto from '../img/20190526-Calvin_profile.jpg';
import UCSCicon from '../img/UCSC IMAGE.png';
import {PicTextLayout} from './items.js';
import {RPicTextLayout} from './items.js';

export default function AboutMeContainer(){
  const aboutmeInfo = ["Hello my name is Calvin. I have a passion for web development, so I built this website showcase the different hobbies I enjoy and hope it sparks interest in other people.",
  "Some of my hobbies are hiking, fishing, photography, and playing videogames. I hope you enjoy my site and leave any feedback to my email. Thank you.",
  ];
  const collegeInfo = ["I Graduated from Univeristy of California Santa Cruz. Being part of UCSC was a great experience for me. Not only did I get to enjoying nature, I also got to meeting a lot of talented and friendly people.",
""];
    return(
      <Container fixed className="p-0">
          <PicTextLayout text={aboutmeInfo} imgsrc={CalPhoto} />
          <RPicTextLayout text={collegeInfo} imgsrc={UCSCicon} />
      </Container>
    );
}