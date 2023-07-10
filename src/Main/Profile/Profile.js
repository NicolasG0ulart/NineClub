import React from "react";
import * as S from "./Styles"

// image
import ImgUser from "../../assets/img-default-user.jpg"

export default function Profile(){

    return(
        <S.ProfileDiv>
            <S.ImgUser src={ImgUser} alt="Imagem do usuário"/>
            <h3>Nicolas Goulart</h3>
        </S.ProfileDiv>
    )
}