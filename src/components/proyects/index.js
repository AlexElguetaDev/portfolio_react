import React from 'react';
import MediaCard from './Card';
import { works } from "../../data/works";
import './Proyects.css';

function Proyects({limite = 6}) {
  return (
    <div>
      {/* <MediaCard
            imageUrl="/image/GoogleClon.png"
            imageAlt="Previsualización de GoogleClon"
            title="Google Clon"
            viewUrl="https://alexelguetadev.github.io/GoogleClon"
            codeUrl="https://github.com/AlexElguetaDev/GoogleClon"
          />
          <MediaCard
            imageUrl="/image/Portfolio.png"
            imageAlt="Previsualización de Portfolio"
            title="Porfolio"
            viewUrl="https://alexelguetadev.github.io/Portfolio2022/"
            codeUrl="https://github.com/AlexElguetaDev/Portfolio2022"
          />
          <MediaCard
            imageUrl="/image/Tesla.png"
            imageAlt="Previsualización de Tesla"
            title="Tesla"
            viewUrl="???"
            codeUrl="https://github.com/AlexElguetaDev/clon_tesla.com"
          />
          <MediaCard
            imageUrl="/image/Clima.png"
            imageAlt="Previsualización de Clima"
            title="Clima"
            viewUrl="https://alexelguetadev.github.io/api_weather_js/"
            codeUrl="https://github.com/AlexElguetaDev/api_weather_js"
          />
          <MediaCard
            imageUrl="/image/Belleza.png"
            imageAlt="Previsualización de Belleza"
            title="Belleza"
            viewUrl="https://alexelguetadev.github.io/Desafio_web_de_belleza/"
            codeUrl="https://github.com/AlexElguetaDev/Desafio_web_de_belleza"
          />
          <MediaCard
            imageUrl="/image/Tecnica.png"
            imageAlt="Previsualización de Tecnica"
            title="Tecnica"
            viewUrl="???"
            codeUrl="https://github.com/AlexElguetaDev/pruebaTecnicaTCIT"
          /> */}
      <div className="container__proyects" >
        {works.slice(0, limite).map((work) => (
          <div key={work.id}>
            <MediaCard
              imageUrl={"/image/" + work.id + ".png"}
              imageAlt={work.id}
              title={work.nombre}
              viewUrl={work.url}
              codeUrl={work.codeUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects;
