import React from 'react'
import Footer from '../footer'
import Header from '../header'
import { works } from '../../data/works'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Proyectos</h1>
        <section className="works">
          {works.map((work) => (
            <article key={work.id} className="work-item">
              <div className="mask">
                <img src={"/assets/" + work.id + ".png"} alt={work.id}></img>
              </div>
              <span>{work.categoria}</span>
              <h2>
                <Link to={"/proyecto/" + work.id}>{work.nombre}</Link>
              </h2>
              <h3>{work.tecnologias}</h3>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio