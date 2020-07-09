import React from 'react';
import {Link} from 'react-router-dom';

//Navbar section
export default function Navbar({updateContent}){
    return(
        <ul className="navBarStyle ">
          <Navitems id="0" text="Home" url="/"/>
          <Navitems id="1" text="About Me" url="/aboutme" />
          <Navitems id="2" text="Photography" url="/photography" />
          <Navitems id="3" text="Blog" url="/blog" />
      </ul>
      
    );
}
// Navitems
function Navitems({id,text,url}){
  return(
    <Link id={id} className="navTabs navFontStyling m-2" to={url}>
      <li className="m-1">{text}</li>
    </Link>
      
  );
}
