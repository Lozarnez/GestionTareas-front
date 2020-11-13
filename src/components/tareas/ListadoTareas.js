import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Tarea from "./Tarea";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  const ProyectosContext = useContext(ProyectoContext);
  const { proyecto, eliminarProyecto } = ProyectosContext;

  const TareasContext = useContext(TareaContext);
  const { tareasproyecto } = TareasContext;

  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

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
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={300} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-primario"
        onClick={() => eliminarProyecto(proyectoActual.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
