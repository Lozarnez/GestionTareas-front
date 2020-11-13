import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  const ProyectosContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = ProyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0) return <p>No hay proyectos</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} className="proyecto" timeout={300}>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
