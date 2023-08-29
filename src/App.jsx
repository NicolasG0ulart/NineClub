import React from "react";
import { createGlobalStyle, styled } from "styled-components";

//react router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//components
import Header from "./Header/Header";
import Main from "./Pages/Home/Main/MainContent";
import Login from "./Pages/Login/Login";


// Links === Link + Stylized
export const LinkS = styled(Link)`
  text-decoration: none;
`

export default function NineClub() {
  const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: #0B2447;
  }
  h1, h2, h3, h4, h5, p, li, button, label{
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #fff;
  }
`

return (
  <>
    <GlobalStyle />
    <Router>
      <Header/>
      
      {/* ROTAS AINDA EM DESENVOLVIMENO, PATH NÃO "OFICIAL" PARA OS ELEMENTOS */}
      <Routes>
        <Route path="/home" element={<Main/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  </>
);
}

// https://colorhunt.co/palette/0b244719376d576cbca5d7e8