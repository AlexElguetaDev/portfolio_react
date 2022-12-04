import React from 'react'
import Footer from '../footer'
import Header from '../header'
/* import './Portfolio.css' */
/* import List from '../list' */
import Proyects from '../proyects'

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Proyectos</h1>
        {/* <List/> */}
        <Proyects/>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio