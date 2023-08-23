import styled from "styled-components"

export const ProfileDiv = styled.div`
    padding: 20px;
    width: 280px;
    height: 340px;
    background-color: #19376D;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #181818;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const ImgUser = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: solid #A5D7E8 5px;
`
export const InfosProfile = styled.div`
    width: 100%;
`
export const Name = styled.h3`
    line-height: 40px;
    font-size: 1.5rem;
    text-align: center;
    color: #A5D7E8;
`
export const TextInfo = styled.p`
    line-height: 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #A5D7E8;
`