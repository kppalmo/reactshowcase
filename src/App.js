import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {ImgTest} from './comp/ImgTest';
import {TxtTest} from './comp/TxtTest';

class App extends React.Component{
  render (){
    return(
      <Container>
        <row>
          <h1 class="CenterText ">Test Page</h1>
          <ImgTest/>
        </row>  
        <row>
          <TxtTest/>
        </row>
      </Container>
    )
  }
}

export default App;
