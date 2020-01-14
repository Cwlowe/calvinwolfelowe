import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

export default function Header({title}){
  return(
    <h1 className="text-center m-2 headerStyle"> {title} </h1>
  );
}

export function PicTextLayout({text,imgsrc}){
    
    return(
        <Grid container style={{flex: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
          <Grid className="m-3 whiteBack" item xs={5} sm={4} md={2} lg={2}>
            <div className="m-2">
              <img className="imageResize imgStyling" src={imgsrc} alt=""/>
            </div>
          </Grid>
          <Grid className="whiteBack " item xs={11} sm={6} md={7} >
            <div className="">
              {text.map((text,index)=>
              <p id={index} className="m-2 textStyling">{text}</p>)}
            </div>
          </Grid>
        </Grid>
    );
}

export function HeaderTextLayout({content,title}){
  const imageClick = (id)=>{
    console.log(id);
  }
  return(
    <Container fixed >
      <Grid container >
        <Grid className="mt-5" item xs={12} >
  <h2 className="h2Styling text-center m-4">{title}</h2>
        </Grid>
      </Grid>
      
      <Grid className="mb-5" container style={{flex: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
        {content.map((image,index)=>
        <Grid item xs={12} sm={6} md={4} align="center">
        <img className="imgPStyle mb-3 mb-lg-0" alt="" onClick={() => imageClick(0)} src={content[index]}/>
        </Grid>
        )}
        
        {/* <Grid item xs={12} sm={6} md={4} align="center">
            <img className="imgPStyle mb-3 mb-lg-0" alt="" onClick={() => imageClick(1)} src={content.copy2}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
            <img className="imgPStyle mb-3 mb-lg-0" alt="" onClick={() => imageClick(2)} src={content.copy3}/>
        </Grid> */}
      </Grid>
    </Container>
  );
}
