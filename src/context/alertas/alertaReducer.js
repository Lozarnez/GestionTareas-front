import * as types from '../../types/index';

export default ( state, action) => {
  switch (action.type) {
    case types.MOSTRAR_ALERTA:
      return {
        alerta: action.payload
      }
    case types.OCULTAR_ALERTA:
      return {
        alerta: null
      }
    default:
      break;
  }
}
