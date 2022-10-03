import { useState ,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap';
import Frase from './components/Frase';

function App() {

   const [personaje, setPersonaje] = useState({})

   useEffect(()=>{
      consultarApi()
   },[])
  
   const consultarApi = async()=>{
     try{
       const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
       const dato = await respuesta.json()
       console.log(dato[0])
       setPersonaje(dato[0])
     }catch(error){
       console.log(error)
      //  mostrar un cartel de error
     }
   }




  return (
    <div className="App">
      <Container>
        <div className=' contenerdorTitulo'>
          <img src= {require ('./img/image.png')} alt="titulo simpson" className="w-100 mt-5"/>
        </div>
        <div className='d-flex justify-content-center my-5'>
        <Button>obtener frase</Button>
        </div>
       <Frase personaje={personaje}/>
      </Container>
    </div>
  );
}

export default App;
