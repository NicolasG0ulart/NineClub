import React from "react";
import * as S from "./Styles"

//icons
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdTopic } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

// image
import ImgUser from "../../assets/img-default-user.jpg"

export default function Profile(){

    return(
        <S.ProfileDiv>
            <S.ImgUser src={ImgUser} alt="Imagem do usuário"/>
            <S.Name>Nicolas Goulart</S.Name>
            <S.InfosProfile>
                <S.TextInfo><FaUser size={13} color="#A5D7E8"/>@nicolasgoulart</S.TextInfo>
                <S.TextInfo><FaLocationDot size={13} color="#A5D7E8"/>Santana do Deserto, MG</S.TextInfo>
                <S.TextInfo><MdTopic size={13} color="#A5D7E8"/>Posts: 43</S.TextInfo>
                <S.TextInfo><AiFillLike size={13} color="#A5D7E8"/>Likes: 3</S.TextInfo>
            </S.InfosProfile>
        </S.ProfileDiv>
    )
}