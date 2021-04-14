import React from 'react';
import Container from '@material-ui/core/Container';
import {HeaderTextLayout} from '../templates/items';
import Footer from '../templates/Footer';
import BannerContainer from '../templates/Banner';

//Home Section
export default function HomeContainer(){
  const content = {
    0:{
      image: "../imgages/20191020-Aboutme.jpg",
      text: "About me",
      url:"/aboutme"
    },
    1:{
      image: "../imgages/Photography.jpg",
      text:"Photography",
      url:"/photography"
    },
    2:{
      image: "../imgages/blog.jpg",
      text:"Blogs",
      url:"/blog"
    }
  };
  //Tapping into the context reducer
  // const value = useContext(ContentContext);
  // let Btitle = value.currentContent[0].title;
    return(
      <div>
        <BannerContainer title={"Home"} />
      <Container className="p-0 homeBack1" maxWidth="lg">
          <HeaderTextLayout content={content}/>
      </Container>
      <Footer/>
      </div>
      
    );
}
