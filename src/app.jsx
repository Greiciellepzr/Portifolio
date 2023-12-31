import React from "react";
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
import Sobre from "./Components/Sobre";
import Projetos from "./Components/Projetos";
import * as S from "./style/global";
// instalar o React router: npm install react-router-dom
// importar as funcionalidades do React router:
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <S.GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
