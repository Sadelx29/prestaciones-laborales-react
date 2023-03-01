import { useState } from "react";

const Formulario = (props) => {
  const [fechaI, setFechaI] = useState("");
  const [fechaF, setfechaF] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [ordinario,  setOrdinario] = useState(false)
  const [intermitente, setIntermitente] = useState(false);


  const pickTipo = (e) => {
    e.preventDefault()
    if(ordinario == false){
      setIntermitente(true)
    } else{
      setOrdinario(true)
    }
    console.log(e.target.value)

    
  }
  function guardarData(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="">
        <form onSubmit={guardarData}>
          <div className="">
            <label className="">Cedula</label>
            <input
              placeholder="Ingrese su Cedula"
              className=""
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
            <label className="">Nombre</label>
            <input
              type="text"
              placeholder="Ingrese su Nombre"
              className=""
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <div>
              <h1>Seleccione periodo</h1>
              <input type="radio" value="mensual" name="gender" /> Mensual
              <input type="radio" value="quinncenal" name="gender" /> Quincenal
              <input type="radio" value="semanal" name="gender" /> Semanal
              <input type="radio" value="diario" name="gender" /> Diario
            </div>
            <div>
              <h1>Seleccione calculo</h1>
              <input type="radio" onChange={pickTipo} value={ordinario} />{" "}
              Ordinario
              <input
                type="radio"
                value={intermitente}
                onChange={pickTipo}
              />{" "}
              Intermitente
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
