import React from "react";
import { createGlobalStyle } from "styled-components";

//components
import Header from "./Header/Header";
import Main from "./Main/MainContent.js";

export default function NineClub() {
  const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: #1E1E1E;
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
