import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import logo from './assets/logosimpson.png'
import Frase from './components/Frase';
import './App.css'
import { useEffect, useState } from 'react';
function App() {
  const [personaje, setPersonaje] = useState({}) 
  
  useEffect(()=>{
    consultarAPI();
  }, [])

  const consultarAPI = async()=>{
    // FetchAPI
    // solicitud GET (POST, PUT o PATCH, DELETE)
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const datos = await respuesta.json()
    console.log(datos[0])
    setPersonaje(datos[0])
  }

  return (
    <>
    <Container className='text-center my-4'>
      <img src={logo} alt="Logo de los simpsons" className='w-50'/>
      <Frase personaje={personaje}></Frase>
      <Button variant='warning' className='mt-3'>Obtener frase</Button>
    </Container>
    </>
  )
}

export default App
