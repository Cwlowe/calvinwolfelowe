import React, {useState, createContext} from 'react';

import PhotoContainer from '../Photography.js';
import HomeContainer from '../Home.js';
import AboutMeContainer from '../AboutMe';


export const ContentContext = createContext();

export const ContentProvider = (props) => {
    const [content] = useState([
        {
          title:"Welcome",
          comp: <HomeContainer/>,
        },
        {
          title:"About me",
          comp: <AboutMeContainer/>,
        },
        {
          title:"Photography",
          comp: <PhotoContainer/>,
        }
      ]);

    const [currentContent, setCurrentContent] = useState([
    {
        title:"Welcome",
        comp: <HomeContainer/>,
    }
    ]);
      
    const updateContent = index =>{
        console.log("Updated: " + index);
        const newContent = [content[index]];
        setCurrentContent(newContent);
    }
    const contentData = {
      currentContent: currentContent,
      setCurrentContent: setCurrentContent,
      updateContent: updateContent
    }
    return(
        <ContentContext.Provider value={contentData}>
            {props.children}
        </ContentContext.Provider>
    );
}

