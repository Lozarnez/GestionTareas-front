import React, { useContext, useState, useEffect } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const ProyectosContext = useContext(ProyectoContext);
  const { proyecto } = ProyectosContext;

  const TareasContext = useContext(TareaContext);
  const {
    errortarea,
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = TareasContext;

  useEffect(() => {
    tareaseleccionada !== null
      ? setTarea(tareaseleccionada)
      : setTarea({ nombre: "" });
  }, [tareaseleccionada]);

  const [tarea, setTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    if (tareaseleccionada === null) {
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea);
      limpiarTarea();
    }
    obtenerTareas(proyectoActual.id);
    setTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            className="input-text"
            type="text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
            type="submit"
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
