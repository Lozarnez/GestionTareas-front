import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';
import * as types from '../../types/index';

const AlertaState = props => {

  const initialState = {
    alerta: null,
  }

  const [state, dispatch] = useReducer(alertaReducer, initialState);

  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: types.MOSTRAR_ALERTA,
      payload: {
        msg, 
        categoria
      }
    });

    setTimeout(() => {
      dispatch({
        type: types.OCULTAR_ALERTA,
      })
    }, 5000);
  }

  return (
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta
      }}
    >
      {props.children}
    </alertaContext.Provider>
  )
}

export default AlertaState;