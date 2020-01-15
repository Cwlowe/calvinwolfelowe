import React, {useState} from 'react';

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
        <a className="linkStyles m-2" target="_blank" rel="noopener noreferrer" key={index} href={links.href}><i className={links.icon}></i> {links.text}</a>)}

    </div>
  )
}
