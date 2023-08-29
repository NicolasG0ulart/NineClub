import styled from "styled-components"

export const Login = styled.section`
    max-width: 1440px;
    width: 100%;
    height: calc(100vh - 70px);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.section`
    padding: 30px;
    height: 530px;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3{
        color: #A5D7E8;
        font-size: 1.7rem;
        text-align: center;
        @media(max-width: 768px){
            font-size: 1.3rem;
        }
    }
    button{
        margin-top: 60px;
        width: 100%;
        height: 60px;
        background-color: #19376D;
        border-radius: 5px;
        border: none;
        color: #576CBC;
        transition: .4s;
        &:hover{
            cursor: pointer;
            border: solid 2px #19376D;
            background-color: #0B2447;
            color: #19376D;
        }
    }
    @media(max-width: 768px){
        width: 310px;
    }
`
export const InputDiv = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    position: relative;

    input{
        color: #A5D7E8;
        font-size: 1rem;
        transition: .1s;
        background-color: transparent;
        height: 50px;
        border: none;
        outline: none;
        border-bottom: solid #19376D 2px;
    }
    label{
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #A5D7E8;
        position: absolute;
        top: -10px;
        &:hover{
            cursor: pointer;
        }
    }
    
`