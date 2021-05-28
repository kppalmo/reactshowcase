import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {ImgTest} from './comp/ImgTest';

class App extends React.Component{
  render (){
    return(
      <Container>
        <row>
          <ImgTest/>
        </row>  
      </Container>
    )
  }
}

export default App;
