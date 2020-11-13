import React, { useReducer } from "react";
import {v4 as uuidv4} from 'uuid';
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import * as types from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { id: 2, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      {
        id: 3,
        nombre: "Elegir Plataformas de pago",
        estado: true,
        proyectoId: 3,
      },
      { id: 4, nombre: "elegir Host", estado: false, proyectoId: 4 },
      { id: 5, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { id: 6, nombre: "Elegir colores", estado: false, proyectoId: 3 },
      {
        id: 7,
        nombre: "Elegir Plataformas de pago",
        estado: true,
        proyectoId: 4,
      },
      { id: 8, nombre: "elegir Host", estado: false, proyectoId: 1 },
      { id: 9, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 10, nombre: "Elegir colores", estado: false, proyectoId: 4 },
      {
        id: 11,
        nombre: "Elegir Plataformas de pago",
        estado: true,
        proyectoId: 4,
      },
      { id: 12, nombre: "elegir Host", estado: false, proyectoId: 2 },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: types.TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: types.AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: types.VALIDAR_TAREA,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: types.ELIMINAR_TAREA,
      payload: id,
    });
  };

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: types.ESTADO_TAREA,
      payload: tarea,
    });
  };

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: types.TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = (tarea) => {
    dispatch({
      type: types.ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  const limpiarTarea = () => {
    dispatch({
      type: types.LIMPIAR_TAREA
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
