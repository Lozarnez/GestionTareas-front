import * as types from '../../types/index';

export default ( state, action) => {
  switch (action.type) {
    case types.LOGIN_EXITOSO:
    case types.REGISTRO_EXITOSO:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      }
    case types.OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      }
    case types.CERRAR_SESION:
    case types.LOGIN_ERROR:
    case types.REGISTRO_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: null,
        mensaje: action.payload,
        cargando: false,
      }
    default:
      break;
  }
}
