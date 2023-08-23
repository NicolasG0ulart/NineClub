import styled from "styled-components"

export const SectionTextArea = styled.section`
    background-color: #19376D;
    border-radius: 20px;
    padding: 20px 20px;
    width: 100%;
    display: flex;
    gap: 30px;
`
export const ImgUser = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: solid #A5D7E8 2px;
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 60px;
    outline: none;
    border-radius: 10px;
    border: none;
    background-color: #576CBC;
    resize: none;
    overflow-y: hidden;
    line-height: 60px;
    font-size: 1.3rem;
    padding-inline: 20px;
    font-family: 'Montserrat', sans-serif;
    &::placeholder{
        color: #A5D7E8;
        font-weight: 500;
    }
    &:focus{
        height: 200px;
        line-height: 35px;
    }
`