import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import logo from "./assets/logosimpson.png";
import Frase from "./components/Frase";
import "./App.css";
import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";
function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarLoading, setMostrarLoading] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setMostrarLoading(true);
      // FetchAPI
      // solicitud GET (POST, PUT o PATCH, DELETE)
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      //verifico si me llego la respuesta
      if(respuesta.status === 200){
        const datos = await respuesta.json();
        setPersonaje(datos[0]);
        //mostrar el componente
        setMostrarLoading(false);
      }
    
    } catch (error) {
      console.error(error);
      //mostrar un mensaje al usuario final
    }
   
  };

  return (
    <>
      <Container className="text-center my-4">
        <img src={logo} alt="Logo de los simpsons" className="w-50" />
        {mostrarLoading ? (
          <div>
            <Commet color="#ffff" size="medium" text="" textColor="" />
          </div>
        ) : (
          <Frase personaje={personaje}></Frase>
        )}

        <Button variant="warning" className="mt-3" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
