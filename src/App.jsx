import React from "react";
import { createGlobalStyle } from "styled-components";

//components
import Header from "./Header/Header";
import Main from "./Main/MainContent.jsx";

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
  h1, h2, h3, h4, h5, p, li, button{
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #fff;
  }
`;
return (
  <>
    <GlobalStyle />
    <Header/>
    <Main/>
  </>
);
}

// https://colorhunt.co/palette/0b244719376d576cbca5d7e8