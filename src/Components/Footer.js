import React from 'react';

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

  return(
    <div style={style}>
    <a href="www.google.com"><i className="fas fa-envelope"></i></a>
    </div>
  )
}
