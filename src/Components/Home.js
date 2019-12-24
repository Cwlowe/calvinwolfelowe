import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './items.js';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import {PicTextLayout} from './items.js';
//Home Section

export default class HomeContainer extends React.Component{

  render(){
    return(
      <div>
        <Header className="mb-3" title={"About Me"}/>
        <Container maxWidth="lg">
            <PicTextLayout text="test" />
        </Container>
      </div>
    );
  }
}
