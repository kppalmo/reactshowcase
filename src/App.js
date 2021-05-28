import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {TxtTest} from './comp/TxtTest';
import { JubmoTest } from './comp/JumboTest';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import sample from '../src/img/sample.png';




class App extends React.Component{
  render (){
    return(
      <Container>
        <Navbar className="bg">
          <h1>test</h1>
          <h1>Test2</h1>
        </Navbar>
        <row> 
          <h1 class="CenterText ">Test Page</h1>
          <Image  className="Resize CenterImg " src={sample} rounded/>
          <h2 class="CenterText">The Above Is My Home</h2>
        </row>  
        <row>
          <TxtTest/>
          <h2 class="CenterText">More Example Work</h2>
        </row>
        <row>
          <JubmoTest/>
        </row>
        <row>
        </row>
      </Container>
    )
  }
}

export default App;
