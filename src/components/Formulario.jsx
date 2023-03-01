import { useState } from "react";

const Formulario = (props) => {
  const [fechaI, setFechaI] = useState("");
  const [fechaF, setfechaF] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");

  function guardarData(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="">
        <form onSubmit={guardarData}>
          <div className="">
            <label className="">
              Cedula
            </label>
            <input
              placeholder="Ingrese su Cedula"
              className=""
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
            <label className="">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ingrese su Nombre"
              className=""
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <div>
              <h1>Seleccione periodo</h1>
              <input type="radio" value="Male" name="gender" /> Mensual
              <input type="radio" value="Female" name="gender" /> Quincenal
              <input type="radio" value="Other" name="gender" /> Semanal
              <input type="radio" value="Other" name="gender" /> Diario
            </div>
            <div>
              <h1>Seleccione calculo</h1>
              <input type="radio" value="Other" name="gender" /> Ordinario
              <input type="radio" value="Other" name="gender" /> Intermitente
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
