import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {ContentContext} from '../Reducer/ContentContext';
import useDeviceDetect from '../utils/deviceDetect'

//Navbar section
export default function Navbar(){
    const {isMobile} = useDeviceDetect();
    console.log(isMobile)
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
  const context = useContext(ContentContext);
  return(
    <Link id={id} className="navTabs headerFontStyling" to={url}>
      <li className="m-1" onClick={()=>{context.updateContent(id)}}>{text}</li>
    </Link>
      
  );
}

