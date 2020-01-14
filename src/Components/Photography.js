import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

// import Content from '../index.js';

//Photography Section
export default class PhotoContainer extends React.Component{
  render(){
    return(
      <Container maxWidth="lg">
        <Grid container space={2}>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
        </Grid>
        <p>I added a change 2</p>
      </Container>
    );
  }
}
