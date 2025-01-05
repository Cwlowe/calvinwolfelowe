import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
  linkStyles:{
    color: "white",
    margin: "2px 10px 2px 10px"
  },
  footer:{
    color: "white",
  },
  footerStyles:{
    backgroundColor: "#313742",
    borderTop: "1px solid #E7E7E7",
    padding: "20px",
    position: "static",
    left:"0",
    bottom: "0",
    height: "60px",
    width: "100%",
    marginTop: "5%",
  }
})
export default function Footer(){
  const classes = useStyles();
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
    <div className={classes.footerStyles}>
      {links.map((links, index)=>
        <a className={classes.linkStyles} target="_blank" rel="noopener noreferrer" key={index} href={links.href}><i className={links.icon}></i> {links.text}</a>)}

    </div>
  )
}
