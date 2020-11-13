import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

  const ProyectosContext = useContext(ProyectoContext);
  const { proyecto, eliminarProyecto } = ProyectosContext;

  const TareasContext = useContext(TareaContext);
  const { tareasproyecto } = TareasContext;

  if(!proyecto) return <h2>Selecciona un proyecto</h2>


  const [proyectoActual] = proyecto;

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasproyecto.map((tarea, index) => <Tarea key={index} tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-primario" onClick={() => eliminarProyecto(proyectoActual.id)}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
