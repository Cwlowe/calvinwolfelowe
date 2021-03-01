import React,{useContext} from 'react';
import Container from '@material-ui/core/Container';
import {PicTextLayout} from '../Templates/items';
import {RPicTextLayout} from '../Templates/items';
import Footer from '../Templates/Footer';
import BannerContainer from '../Templates/Banner'; 
import {ContentContext} from '../Reducer/ContentContext';

export default function AboutMeContainer(){
  const aboutmeInfo = ["Hello, my name is Calvin. I am currently working as a web developer. I enjoy working on small projects such as this website to showcase my hobbies.",
  "Some of the hobbies I enjoy are hiking, fishing, and photography. I hope you enjoy my site and leave any feedback to my email. Thank you.",
  ];
  const collegeInfo = ["I graduated from Univeristy of California Santa Cruz with a BS in computer science. You can check out more of my projects that I have worked on through my github.",
""];
const value = useContext(ContentContext);
  let Btitle = value.currentContent[0].title;
    return(
      <div>
        <BannerContainer title={Btitle} />
        <Container fixed className="p-0" maxWidth="md">
          <PicTextLayout text={aboutmeInfo} imgsrc={'/img/20190526-Calvin_profile.jpg'} />
          <RPicTextLayout text={collegeInfo} imgsrc={'/img/UCSC IMAGE.png'} />
      </Container>
      <Footer/>
      </div>
      
    );
}