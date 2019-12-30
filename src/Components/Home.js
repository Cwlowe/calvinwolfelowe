import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './items.js';
import CalPhoto from '../img/20190526-Calvin_profile.jpg';
import {PicTextLayout} from './items.js';

//Home Section
export default class HomeContainer extends React.Component{

  render(){
    return(
      <div>
        <Header className="mb-3" title={"About Me"}/>
        <Container maxWidth="lg">
            <PicTextLayout text="test" imgsrc={CalPhoto} />
        </Container>
      </div>
    );
  }
}
