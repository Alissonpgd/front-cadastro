import React from 'react';
import './App.css';
import Home from './pages/Home/index';
import Empresa from './pages/Empresa'
import Fornecedor from './pages/Fornecedor'
import FormularioEmpresa from './components/Formularios/FormularioEmpresa'
import FormularioFornecedor from './components/Formularios/FormularioFornecedor'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UpdateEmpresa from './pages/UpdateEmpresa/UpdateEmpresa ';
import UpdateFornecedor from './pages/UpdateFornecedor/UpdateFornecedor';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/empresa' element={<Empresa/>}/>
        <Route path='/fornecedor' element={<Fornecedor/>}/> 
        <Route path='/formempresa' element={<FormularioEmpresa/>}/> 
        <Route path='/formfornecedor' element={<FormularioFornecedor/>}/> 
        <Route path='/empresa/:id' element={<UpdateEmpresa/>} />
        <Route path='/fornecedor/:id' element={<UpdateFornecedor/>} />
      </Routes>
    </Router>
  );
}

export default App;


