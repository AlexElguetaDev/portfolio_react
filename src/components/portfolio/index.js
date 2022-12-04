import React from 'react'
import Footer from '../footer'
import Header from '../header'
import './Portfolio.css'
import List from '../list'

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Proyectos</h1>
        <List/>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio