import styled from "styled-components"

export const ProfilePost = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    
`

export const ImgUser = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: solid #fff 2px;

`

export const NameUser = styled.p`
    font-family: 'Chela One', cursive;
    font-size: 1.3rem;
`

export const Posting = styled.div`
    margin-top: 30px;
    border-top: solid #3d3d3d 1px;
    border-bottom: solid #3d3d3d 1px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    p{
        color: #fff;
        word-break: break-all;
        font-family: 'Chela One', cursive;
        font-size: 1.2rem;
    }
    

`