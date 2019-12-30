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
    return(
      <div>
        <Grid container>
          <Grid className="m-2 whiteBack imgContainercenter" item xs={5}>
            <div className="m-2">
              <img className="imageResize" src={imgsrc} alt=""/>
            </div>
          </Grid>
          <Grid className="m-2 whiteBack"item xs={6}>
            <p className="m-2">{text}</p>
          </Grid>
        </Grid>
      </div>
    );
}
