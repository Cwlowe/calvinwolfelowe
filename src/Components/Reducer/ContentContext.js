import React, {useState, createContext} from 'react';

import PhotoContainer from '../Pages/Photography';
import HomeContainer from '../Pages/Home';
import AboutMeContainer from '../Pages/AboutMe';
import Blog from '../Pages/Blog';

export const ContentContext = createContext();

export const ContentProvider = (props) => {
    const [content] = useState([
        {
          title:"Welcome",
          comp: <HomeContainer/>,
          href:"home"
        },
        {
          title:"About me",
          comp: <AboutMeContainer/>,
          href:"aboutme"
        },
        {
          title:"Photography",
          comp: <PhotoContainer/>,
          href:"photography"
        },
        {
          title:"Blog",
          comp: <Blog/>,
          href:'blog"'
        }
      ]);

    const [currentContent, setCurrentContent] = useState([
    {
        title:"Welcome",
        comp: <HomeContainer/>,
        href:"home"
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

