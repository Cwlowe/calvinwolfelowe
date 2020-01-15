import React, {useContext} from 'react';
import '../index.css';

// import PhotoContainer from './Photography.js';
// import HomeContainer from './Home.js';
// import AboutMeContainer from './AboutMe';
import BannerContainer from './Banner.js'; 
//import AboutmeContainer from './Components/AboutMe.js';
import Footer from './Footer.js';
import {ContentContext} from './Context/ContentContext.js';

//Content section
export default function App(){
  const value = useContext(ContentContext);

  return(
      <div className="tab-content" id="tabContent">
        <BannerContainer title={value.currentContent[0].title} />
        {value.currentContent[0].comp}
        <Footer/>
      </div>
  );
}
