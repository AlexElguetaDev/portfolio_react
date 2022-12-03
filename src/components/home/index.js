import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="container ContainerHome">
        <h1>
          Mi nombre es Alex Elgueta. <strong>FullStack Developer</strong>
        </h1>
        <h2>
          Te ayudo a crear tu sitio o aplicacion web, Tener mas visibilidad y
          relevancia en internet.
        </h2>
        <p>
          <Link to="/Contacto">Contacta conmigo</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
