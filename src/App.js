import { useState ,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap';
import Frase from './components/Frase';
import SpinnerS from './components/SpinnerS';

function App() {

   const [personaje, setPersonaje] = useState({})
   const [mostrarSpinner, setMostrarSpinner] = useState(true)

   useEffect(()=>{
      consultarApi()
   },[])
  
   const consultarApi = async()=>{
     try{
      setMostrarSpinner(true)
       const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
       const dato = await respuesta.json()
       console.log(dato[0])
       setPersonaje(dato[0])
       setTimeout(()=>{
         setMostrarSpinner(false)
       },2500)
     }catch(error){
       console.log(error)
       setMostrarSpinner(false)
      //  mostrar un cartel de error
     }
   }

   const mostrarComponente = (mostrarSpinner)? ( <div>
    <SpinnerS/>
   </div>) : (  <Frase personaje={personaje}/>)


  return (
    <div className="App">
      <Container>
        <div className=' contenerdorTitulo'>
          <img src= {require ('./img/image.png')} alt="titulo simpson" className="w-100 mt-5"/>
        </div>
        <div className='d-flex justify-content-center my-5'>
        <Button onClick={consultarApi}>obtener frase</Button>
        </div>
        {
           mostrarComponente
        }
      </Container>
    </div>
  );
}

export default App;
