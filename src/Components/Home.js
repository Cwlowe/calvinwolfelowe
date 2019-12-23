import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './items.js';

//Home Section
export default class HomeContainer extends React.Component{

  render(){
    return(
      <div>
        <Header className="mb-3" title={"About Me"}/>
        <Container className="containerStyle" maxWidth="lg">
          
          <p class="text-center"> hello </p>

        </Container>
      </div>
    );
  }
}
