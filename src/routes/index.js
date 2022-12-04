import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Contact from '../components/contact';
import ProtectedRoutes from './ProtectedRoutes';
import Login from '../components/login/index.js';
import ErrorPage from '../components/errorPage';
import Portfolio from '../components/portfolio';
import Proyecto from '../components/proyecto';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/proyecto/:id" element={<Proyecto/>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
