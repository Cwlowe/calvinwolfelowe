import React, {useContext} from 'react';
import '../index.css';

import PhotoContainer from './Photography.js';
import HomeContainer from './Home.js';
import BannerContainer from './Banner.js'; 
//import AboutmeContainer from './Components/AboutMe.js';
import Footer from './Footer.js';
import AboutMeContainer from './AboutMe';
import {ContentContext} from './Context/ContentContext.js';
import {ContentProvider} from './Context/ContentContext.js';

//Content section
export default function App(){
  const currentContent = useContext(ContentContext);
  console.log(`this is ${currentContent}`);
  return(
    <ContentProvider>
      <div className="tab-content" id="tabContent">
        <BannerContainer />
          {currentContent}
        <Footer/>
      </div>
    </ContentProvider>
    
  );
}
