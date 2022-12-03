import React from "react";
import MediaCard from "./Card";
import "./Proyects.css";

function ProyectsHome() {
  return (
    <div>
      <div className="container">
        <h2>Conoce algunos de mis proyectos</h2>
        <div className="container__proyects">
          <MediaCard
            imageUrl="/assets/GoogleClon.png"
            imageAlt="Previsualización de GoogleClon"
            title="Google Clon"
            viewUrl="https://alexelguetadev.github.io/GoogleClon"
            codeUrl="https://github.com/AlexElguetaDev/GoogleClon"
          />
          <MediaCard
            imageUrl="/assets/Tesla.png"
            imageAlt="Previsualización de Tesla"
            title="Tesla Clon"
            viewUrl="???"
            codeUrl="https://github.com/AlexElguetaDev/clon_tesla.com"
          />
          <MediaCard
            imageUrl="/assets/Tecnica.png"
            imageAlt="Previsualización de Tecnica"
            title="Prueba Tecnica TCIT"
            viewUrl="???"
            codeUrl="https://github.com/AlexElguetaDev/pruebaTecnicaTCIT"
          />
        </div>
      </div>
    </div>
  );
}

export default ProyectsHome;
