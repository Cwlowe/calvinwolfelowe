import React, {useState} from 'react';
import '../index.css';

import PhotoContainer from './Photography.js';
import HomeContainer from './Home.js';
//import AboutmeContainer from './Components/AboutMe.js';
import Navbar from './navbar.js';
import Footer from './Footer.js';
//Content section
export default function App(){
  let index = 0;
  const [content] = useState([
    {
      title:"About me",
      comp: <HomeContainer/>
    },
    {
      title:"Photography",
      comp: <PhotoContainer/>
    }
  ]);
  const [currentcontent, setCurrentContent] = useState([
    {
      title:"About me",
      comp: <HomeContainer/>
    }
  ]);
  const updateContent = index =>{
    const newContent = [content[index]];
    setCurrentContent(newContent);
  }

  return(
    <div className="tab-content" id="tabContent">
    <Navbar updateContent={updateContent}/>
    {currentcontent[index].comp}
    <Footer/>
  	</div>
  );
}
