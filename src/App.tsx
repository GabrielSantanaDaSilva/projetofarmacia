import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListaCategorias from './pages/categoria/ListaCategoria';
import FormularioCategoria from './pages/categoria/FormCategoria';
import DeletarCategoria from './pages/categoria/DeletarCategoria';


function App() {
  return (
    <>
    
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
             <Route path="/categorias" element={<ListaCategorias />} />
             <Route path="/cadastrocategoria" element={<FormularioCategoria />} />
             <Route path="/editarcategoria/:id" element={<FormularioCategoria />} />
             <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      
    </>
  );
}
export default App;