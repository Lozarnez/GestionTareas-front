import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({ proyecto }) => {
  const ProyectosContext = useContext(ProyectoContext);
  const { proyectoActual } = ProyectosContext;

  const TareasContext = useContext(TareaContext);
  const { obtenerTareas } = TareasContext;

  const seleccionarProyecto = id => {
    proyectoActual(id);
    obtenerTareas(id);
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
