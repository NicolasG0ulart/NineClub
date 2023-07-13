import styled from "styled-components"

export const PostingArea = styled.div`
    border: solid #3d3d3d 1px;
    background-color: #171616;
    border-radius: 30px;
    max-width: 60%;
    width: 100%;
    height: 150vh;
`
export const APostingDefault = styled.div`
    background-color: #330085;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    width: 100%;
    height: 80px;
    padding-inline: 15px;
    display: flex;
    align-items: center;
    gap: 30px;
`
export const ImgUser = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: solid #fff 2px;

`
export const InputPosting = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #171616;

    text-align: center;
    font-size: 1.3rem;
    color: #fff;
    font-family: 'Chela One', cursive;
`