import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import { works } from '../../data/works';
import './proyecto.css'

const Proyecto = () => {

  const [proyecto, setProyecto] = useState({})
  const params = useParams();

  useEffect(() => {
    let proyecto = works.filter(work => work.id === params.id);
    setProyecto(proyecto[0]);
  },[]);

  return (
    <div>
      <Header />
      <div className="page page-work">
        <img src={"/image/" + proyecto.id + ".png"} alt={proyecto.id}></img>
        <h1 className="heading">{proyecto.nombre}</h1>
        <p className="tec">{proyecto.tecnologias}</p>
        <a
          href={proyecto.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          Ir al proyecto
        </a>
        <p className="des">{proyecto.descripcion}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Proyecto