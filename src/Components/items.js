import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

export default class Header extends React.Component{

  render(){
    return(
      <h1 className="text-center my-4 mx-1 mx-md-0 headerStyle fontStyling"> {this.props.title} </h1>
    );
  }
}

export class PicTextLayout extends React.Component{
  render(){
    return(
      <div>
        <Grid container>
          <Grid className="m-2 whiteBack" item xs={2}>
            <p className="m-2">{this.props.text}</p>
          </Grid>
          <Grid className="m-2 whiteBack"item xs={9}>
            <p className="m-2">{this.props.text}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
