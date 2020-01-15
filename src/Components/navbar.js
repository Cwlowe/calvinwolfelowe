import React, {useContext} from 'react';
// import Content from '../index.js';
import {ContentContext} from "./Context/ContentContext.js";

//Navbar section
export default function Navbar({updateContent}){
    return(
      <div className="navBar">
        <div>
          <Navitems id="0" href="#home" text="Home"  />
          <Navitems id="1" href="#aboutme" text="About Me"  />
          <Navitems id="2" href="#photography" text="Photography"  />
        </div>
      </div>
    );
}
// Navitems
function Navitems({id, href, text}){
  const Content = useContext(ContentContext);

  return(
      <button id={id} className="navTabs headerFontStyling m-2" data-toggle="tab" role="tab" aria-controls="homeSection" aria-selected="true" onClick={() => Content.updateContent(id)}>{text}</button>
  );
}
