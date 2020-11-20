import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import * as types from "../../types/index";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const response = await clienteAxios.post("/api/usuarios", datos);
      console.log(response);
      dispatch({
        type: types.REGISTRO_EXITOSO,
        payload: response.data,
      });

      // Obtener usuario
      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: types.REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.get("/api/auth");
      dispatch({
        type: types.OBTENER_USUARIO,
        payload: response.data.usuario,
      });
    } catch (error) {
      dispatch({
        type: types.LOGIN_ERROR,
      });
    }
  };

  const iniciarSesion = async datos => {
    try {
      const response = await clienteAxios.post('/api/auth', datos);
      dispatch({
        type: types.LOGIN_EXITOSO,
        payload: response.data
      });
      // Obtener usuario
      usuarioAutenticado();
    } catch (error) {
      console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: types.LOGIN_ERROR,
        payload: alerta,
      });
    }
  }

  const cerrarSesion = () => {
    dispatch({
      type: types.CERRAR_SESION
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
