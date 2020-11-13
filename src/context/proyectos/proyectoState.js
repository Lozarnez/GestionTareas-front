import React, { useReducer } from "react";
import {v4 as uuidv4} from 'uuid';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import * as types from '../../types';


const ProyectoState = (props) => {

  const proyectos = [
    {id: 1, nombre: 'Tienda virtual'},
    {id: 2, nombre: 'Intranet'},
    {id: 3, nombre: 'Dieseño web'},
    {id: 4, nombre: 'MERN'},
  ]

  const initialState = {
    formulario: false,
    proyectos: [],
    errorformulario: false,
    proyecto: null,
  };

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: types.FORMULARIO_PROYECTO
    })
  }

  const obtenerProyectos = () => {
    dispatch({
      type: types.OBTENER_PROYECTOS,
      payload: proyectos,
    })
  }

  const agregarProyecto = proyecto => {
    proyecto.id = uuidv4();
    dispatch({
      type: types.AGREGAR_PROYECTO,
      payload: proyecto,
    })
  }

  const mostrarError = () => {
    dispatch({
      type: types.VALIDAR_FORMULARIO,
    })
  }

  const proyectoActual = proyectoId => {
    dispatch({
      type: types.PROYECTO_ACTUAL,
      payload: proyectoId,
    })
  }

  const eliminarProyecto = proyectoId => {
    dispatch({
      type: types.ELIMINAR_PROYECTO,
      payload: proyectoId,
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
