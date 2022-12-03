import React from 'react';
import Header from '../header';
import Footer from '../footer';
import MediaCard from './Card';
import './Proyects.css';

function Proyects() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Proyectos</h2>
        <div className="container__proyects">
          <MediaCard
            imageUrl="/assets/GoogleClon.png"
            imageAlt="Previsualización de página"
            title="Google Clon"
            viewUrl="https://alexelguetadev.github.io/GoogleClon"
            codeUrl="https://github.com/AlexElguetaDev/GoogleClon"
          />
          <MediaCard
            imageUrl="/assets/Portfolio.png"
            imageAlt="Previsualización de página"
            title="Primer Porfolio"
            viewUrl="https://alexelguetadev.github.io/Portfolio2022/"
            codeUrl="https://github.com/AlexElguetaDev/Portfolio2022"
          />
          <MediaCard
            imageUrl="/assets/Tesla.png"
            imageAlt="Previsualización de página"
            title="Tesla Clon"
            viewUrl="???"
            codeUrl="https://github.com/AlexElguetaDev/clon_tesla.com"
          />
          <MediaCard
            imageUrl="/assets/Clima.png"
            imageAlt="Previsualización de página"
            title="Api weather js"
            viewUrl="https://alexelguetadev.github.io/api_weather_js/"
            codeUrl="https://github.com/AlexElguetaDev/api_weather_js"
          />
          <MediaCard
            imageUrl="/assets/Belleza.png"
            imageAlt="Previsualización de página"
            title="Web de belleza"
            viewUrl="https://alexelguetadev.github.io/Desafio_web_de_belleza/"
            codeUrl="https://github.com/AlexElguetaDev/Desafio_web_de_belleza"
          />
          <MediaCard
            imageUrl="/assets/Tecnica.png"
            imageAlt="Previsualización de página"
            title="Prueba Tecnica TCIT"
            viewUrl="???"
            codeUrl="https://github.com/AlexElguetaDev/pruebaTecnicaTCIT"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Proyects;
