import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicKs, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicKs+1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
      <img src={freeCodeCampLogo} alt="Logo de freeCodeCamp" className="freecodecamp-logo" />
      </div>

      <div className="contenedor-principal-contador">
        <Contador
        numClics={numClicKs}/>
        <Boton
        texto="Click"
        esBotonDeClic={true}
        manejarClic={manejarClick}/>

        <Boton
        texto="Reboot"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>

    </div>

  );
}

export default App;
