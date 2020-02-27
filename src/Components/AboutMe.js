import React from 'react';
import Container from '@material-ui/core/Container';
import CalPhoto from '../img/20190526-Calvin_profile.jpg';
import UCSCicon from '../img/UCSC IMAGE.png';
import {PicTextLayout} from './items.js';
import {RPicTextLayout} from './items.js';
import Footer from './Footer.js';

export default function AboutMeContainer(){
  const aboutmeInfo = ["Hello, my name is Calvin. I am currently working as a web developer. I enjoy working on small projects such as this website to showcase my hobbies.",
  "Some of the hobbies I enjoy are hiking, fishing, and photography. I hope you enjoy my site and leave any feedback to my email. Thank you.",
  ];
  const collegeInfo = ["I graduated from Univeristy of California Santa Cruz with a BS in computer science. You can check out more of my projects that I have worked on through my github.",
""];
    return(
      <div>
        <Container fixed className="p-0" maxWidth="md">
          <PicTextLayout text={aboutmeInfo} imgsrc={CalPhoto} />
          <RPicTextLayout text={collegeInfo} imgsrc={UCSCicon} />
      </Container>
      <Footer/>
      </div>
      
    );
}