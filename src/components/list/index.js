import React from "react";
import { works } from "../../data/works";
import { Link } from "react-router-dom";
import './List.css'

const List = ({ limite = 6}) => {
  return (
        <section className="works">
          {works.slice(0,limite).map((work) => (
            <article key={work.id} className="work-item">
              <div className="mask">
                <img src={"/image/" + work.id + ".png"} alt={work.id}></img>
              </div>
              <span>{work.categoria}</span>
              <h2 className="prin">
                <Link to={"/proyecto/" + work.id}>{work.nombre}</Link>
              </h2>
              <h3>{work.tecnologias}</h3>
            </article>
          ))}
        </section>
  );
};

export default List;
