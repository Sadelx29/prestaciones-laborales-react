import { Boton } from "./components/Boton";
import Formulario from "./components/Formulario";
import { Resultado } from "./components/Resultado";
import { Totalidad } from "./components/Totalidad";
function App() {
  const Calcular = () => {
    console.log("estoy aqui");
  };
  const Imprimir = () => {
    console.log("estoy aqui");
  };
  const Ayuda = () => {
    console.log("estoy aqui");
  };
  const Limpiar = () => {
    console.log("estoy aqui");
  };

  return (
    <div className=" ">
      <h1 className="font-black text-3xl text-center">
        Prestaciones Laborales
      </h1>
      <Formulario />

      <Resultado />
      <Totalidad />
      <Boton text="Calcular" manejarClic={Calcular} />
      <Boton text="Imprimir" manejarClic={Imprimir} />
      <Boton text="Ayuda" manejarClic={Ayuda} />
      <Boton text="Limpiar" manejarClic={Limpiar} />
    </div>
  );
}

export default App;
