import React, {useState} from 'react';
import '../index.css';

import PhotoContainer from './Photography.js';
import HomeContainer from './Home.js';
import BannerContainer from './Banner.js'; 
//import AboutmeContainer from './Components/AboutMe.js';
import Footer from './Footer.js';
import AboutMeContainer from './AboutMe';
//Content section
export default function App(){
  let index = 0;
  const [content] = useState([
    {
      title:"Welcome",
      comp: <HomeContainer/>,
      id:0
    },
    {
      title:"About me",
      comp: <AboutMeContainer/>,
      id:1
    },
    {
      title:"Photography",
      comp: <PhotoContainer/>,
      id:2
    }
  ]);
  const [currentcontent, setCurrentContent] = useState([
    {
      title:"Welcome",
      comp: <HomeContainer/>,
      id:0
    }
  ]);
  const updateContent = index =>{
    const newContent = [content[index]];
    setCurrentContent(newContent);
  }

  return(
    <div className="tab-content" id="tabContent">
    
    <BannerContainer content={currentcontent[0].title} updateContent={updateContent} />
    {currentcontent[index].comp}
    <Footer/>
  	</div>
  );
}
