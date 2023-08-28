import styled from "styled-components"

export const Post = styled.div`
    position: relative;
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
    @media(max-width: 768px){
        position: absolute;
        top: 15px;
    }
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
        @media(max-width: 485px){
            font-size: 1rem;
        }
    }
    p{
        color: #82aab8;
        @media(max-width: 485px){
            font-size: .8rem;
        }
    }
    @media(max-width: 768px){
        padding: 0 65px;
        flex-direction: column;
        align-items: start;
        gap: 5px;
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
    :nth-child(4){
        display: none;
    }
    @media(max-width: 768px){
        :nth-child(3){
            display: none;
        }
        :nth-child(4){
            padding-top: 10px;
            display: block;
        }
    }
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
        @media(max-width: 768px){
            width: 70px;
        }
    }
`