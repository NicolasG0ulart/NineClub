import styled from "styled-components"

export const ProfileDiv = styled.div`
    padding: 20px;
    width: 380px;
    height: 340px;
    background-color: #330085;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;


    h3{
        color: #fff;
        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;
    }
`

export const ImgUser = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: solid #fff 5px;

`