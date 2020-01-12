import React from 'react';
// import Content from '../index.js';

//Navbar section
export default function Navbar({updateContent}){
    return(
      <div className="navBar">
        <div>
          <Navitems updateContent={updateContent} id="0" href="#home" text="Home"  />
          <Navitems updateContent={updateContent} id="1" href="#aboutme" text="About Me"  />
          <Navitems updateContent={updateContent} id="2" href="#photography" text="Photography"  />
        </div>
      </div>
    );
}
// Navitems
function Navitems({updateContent, id, href, text}){
  return(
      <button id={id} className="navTabs headerFontStyling m-2" data-toggle="tab" role="tab" aria-controls="homeSection" aria-selected="true" onClick={() => updateContent(id)}>{text}</button>
  );
}
