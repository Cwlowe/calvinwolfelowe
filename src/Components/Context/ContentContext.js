import React, {useState, createContext} from 'react';

import PhotoContainer from '../Photography.js';
import HomeContainer from '../Home.js';
import AboutMeContainer from '../AboutMe';


export const ContentContext = createContext();

export const ContentProvider = (props) => {
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

    const [currentContent, setCurrentContent] = useState([
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
        <ContentContext.Provider value={currentContent} >
            {props.children}
        </ContentContext.Provider>
    );
}

