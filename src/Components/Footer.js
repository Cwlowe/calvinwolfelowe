import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Footer(){
  const [links] =useState([
    {
      href: "mailto:calvinwolfelowe@gmail.com",
      icon: "fas fa-envelope",
      text: "Email"
    },
    {
      href: "https://github.com/Cwlowe",
      icon: "fab fa-github-alt",
      text: "Github"
    },
    {
      href: "https://www.linkedin.com/in/calvin-lowe/",
      icon: "fab fa-linkedin",
      text: "Linkedin"
    }
  ]);
  return(
    <div className={"footerStyles"}>
      {links.map((links, index)=>
        <Link
            to={{pathname:links.href}}
            className="linkStyles m-2" 
            target="_blank"
            key={index}>
              <i className={links.icon}></i> {links.text}
        </Link>)}

    </div>
  )
}
