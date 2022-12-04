import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from "react-router-dom";
import './Home.css';
import Proyects from '../proyects';
/* import List from '../list'; */

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
          <Link to="/Contacto" className='Contact'>Contacta conmigo</Link>
        </p>
        <h3>↓Algunos de mis proyectos↓</h3>
        {/* <List limite="3" /> */}
        <Proyects limite="3" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
