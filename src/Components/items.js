import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

export default function Header({title}){
  return(
    <h1 className="text-center my-4 mx-1 mx-md-0 headerStyle fontStyling"> {title} </h1>
  );
}

export function PicTextLayout({text,imgsrc}){
    //
    return(
      <div>
        <Grid container style={{flex: 1,flexDirection: 'column',stifyContent: 'center',alignItems: 'center'}}>
          <Grid className="mb-3 whiteBack imgContainercenter" item xs={8} sm={3} md={2}>
            <div className="m-2">
              <img className="imageResize" src={imgsrc} alt=""/>
            </div>
          </Grid>
          <Grid className="whiteBack " item xs={11} sm={6} md={6} >
            <div className="m-3">
              {text.map((text,index)=>
              <p id={index} className="m-2 fontStyling">{text}</p>)}
            </div>
          </Grid>
        </Grid>

      </div>
    );
}
