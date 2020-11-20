import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const ProyectosContext = useContext(ProyectoContext);
  const { proyecto } = ProyectosContext;

  const TareasContext = useContext(TareaContext);
  const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = TareasContext;

  const [proyectoActual] = proyecto;

  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual.id);
  };

  const cambiarEstado = tarea => {
    tarea.estado = !tarea.estado
    actualizarTarea(tarea);
  }

  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea);
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo" onClick={() => cambiarEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => cambiarEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => seleccionarTarea(tarea)}>
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
