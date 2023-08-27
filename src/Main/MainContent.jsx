import React from "react";
import styled from "styled-components"

//components
import Profile from "../components/ProfileHome/Profile";
import PostingArea from "../components/PostingArea/PostingArea";

export default function Main(){

    const Content = styled.main`
        max-width: 1440px;
        margin: 60px auto;
        display: flex;
        justify-content: space-between;
        gap: 60px;
        @media(max-width: 1440px){
            border: solid blue;
            padding-inline: 30px;
        }
        @media(max-width: 1024px){
            justify-content: center;
        }
    `


    return(
        <Content>
            <Profile/>
            <PostingArea/>
        </Content>
    )
}