import * as types from "../../types";

export default (state, action) => {
  switch (action.type) {
    case types.TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };
    case types.AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
        errortarea: false,
      };
    case types.VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true,
      };
    default:
      return state;
  }
};
