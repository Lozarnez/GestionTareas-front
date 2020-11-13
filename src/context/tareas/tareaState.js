import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import * as types from '../../types'; 

const TareaState = props => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataformas de pago", estado: true, proyectoId: 3 },
      { nombre: "elegir Host", estado: false, proyectoId: 4 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { nombre: "Elegir colores", estado: false, proyectoId: 3 },
      { nombre: "Elegir Plataformas de pago", estado: true, proyectoId: 4 },
      { nombre: "elegir Host", estado: false, proyectoId: 1 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { nombre: "Elegir colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir Plataformas de pago", estado: true, proyectoId: 4 },
      { nombre: "elegir Host", estado: false, proyectoId: 2 },
    ],
    tareasproyecto: null,
    errortarea: false,
  }

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = proyectoId => {
    dispatch({
      type: types.TAREAS_PROYECTO,
      payload: proyectoId,
    })
  }

  const agregarTarea = tarea => {
    dispatch({
      type: types.AGREGAR_TAREA,
      payload: tarea,
    })
  }

  const validarTarea = () => {
    dispatch({
      type: types.VALIDAR_TAREA,
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
      }}>
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState;