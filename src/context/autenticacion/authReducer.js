import * as types from '../../types/index';

export default ( state, action) => {
  switch (action.type) {
    case types.LOGIN_EXITOSO:
    case types.REGISTRO_EXITOSO:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null
      }
    case types.OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload
      }
    case types.LOGIN_ERROR:
    case types.REGISTRO_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        mensaje: action.payload
      }
    default:
      break;
  }
}
