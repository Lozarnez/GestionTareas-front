import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

  const ProyectosContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = ProyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if(proyectos.length === 0) return <p>No hay proyectos</p>;

  return (
    <ul className='listado-proyectos'>
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
}

export default ListadoProyectos;