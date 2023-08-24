import styled from "styled-components"

export const Post = styled.div`
    margin-top: 20px;
    padding: 20px 20px;
    background-color: #19376D;
    border-radius: 20px;
    display: flex;
    gap: 20px;
`
export const ImgUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid #A5D7E8 2px;
`
export const InfosUser = styled.div`
    width: 100%;
`
export const NameUser = styled.div`
    padding-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    h3{
        font-size: 1.3rem;
        color: #A5D7E8;
    }
    p{
        color: #82aab8;
    }
`
export const ContentPost = styled.div`
    padding-top: 20px;
    p{
        color: #A5D7E8;
    }
`
export const Buttons = styled.div`
    padding-top: 30px;
    display: flex;
    gap: 30px;
    justify-content: space-evenly;

    button{
        background-color: #576CBC;
        color: #A5D7E8;
        transition: .6s;
        border-radius: 10px;
        border: none;
        height: 50px;
        width: 150px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        &:hover{
            cursor: pointer;
            background-color: #0B2447;

        }

    }
`