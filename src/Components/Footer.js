import React, {useState} from 'react';

export default function Footer(){
  const style = {
    backgroundColor: "#313742",
    borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",

  }
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
    <div style={style}>
      {console.log(links)}
      {links.map((links, index)=>
        <a className="linkStyles m-2" target="_blank" rel="noopener noreferrer" href={links.href}><i className={links.icon}></i> {links.text}</a>)}

    </div>
  )
}
