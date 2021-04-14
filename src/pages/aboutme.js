import React from 'react';
import Container from '@material-ui/core/Container';
import {PicTextLayout} from '../templates/items';
import {RPicTextLayout} from '../templates/items';
import Footer from '../templates/Footer';
import BannerContainer from '../templates/Banner';
//images
import image1 from "../images/20190526-Calvin_profile.jpg";
import image2 from "../images/UCSC IMAGE.png";

export default function AboutMeContainer(){
  const aboutmeInfo = ["Hello, my name is Calvin. I am currently working as a web developer. I enjoy working on small projects such as this website to showcase my hobbies.",
  "Some of the hobbies I enjoy are hiking, fishing, and photography. I hope you enjoy my site and leave any feedback to my email. Thank you.",
  ];
  const collegeInfo = ["I graduated from Univeristy of California Santa Cruz with a BS in computer science. You can check out more of my projects that I have worked on through my github.",
""];

    return(
      <div>
        <BannerContainer title={"About Me"} />
        <Container fixed className="p-0" maxWidth="md">
          <PicTextLayout text={aboutmeInfo} imgsrc={image1} />
          <RPicTextLayout text={collegeInfo} imgsrc={image2} />
      </Container>
      <Footer/>
      </div>
      
    );
}