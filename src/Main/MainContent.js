import React from "react";
import styled from "styled-components"

//components
import Profile from "./Profile/Profile";
import PostingArea from "./PostingArea/PostingArea";

export default function Main(){

    const Content = styled.main`
    padding: 60px 80px;
    display: flex;
    justify-content: space-between;
    `


    return(
        <Content>
            <Profile/>
            <PostingArea/>
        </Content>
    )
}