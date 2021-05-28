import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {ImgTest} from './comp/ImgTest';
import {TxtTest} from './comp/TxtTest';
import { JubmoTest } from './comp/JumboTest';
import 'bootstrap/dist/css/bootstrap.css';



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
          <h2 class="CenterText">More Example Work</h2>
        </row>
        <row>
          <JubmoTest/>
        </row>
      </Container>
    )
  }
}

export default App;
