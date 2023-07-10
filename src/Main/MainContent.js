import React from "react";
import styled from "styled-components"

//components
import Profile from "./Profile/Profile";

export default function Main(){

    const Content = styled.main`
    padding: 60px 80px;
    `


    return(
        <Content>
            <Profile/>
        </Content>
    )
}