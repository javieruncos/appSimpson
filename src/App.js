import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap';
import Frase from './components/Frase';
function App() {
  return (
    <div className="App">
      <Container>
        <div className=' contenerdorTitulo'>
          <img src= {require ('./img/image.png')} alt="titulo simpson" className="w-100 mt-5"/>
        </div>
        <div className='d-flex justify-content-center my-5'>
        <Button>obtener frase</Button>
        </div>
       <Frase/>
      </Container>
    </div>
  );
}

export default App;
