import React from "react";
import * as S from "./Styles"

//images
import ImgUser from "../../../assets/img-default-user.jpg"

//icons

export default function TextArea(){

    return(
        <>
            <S.SectionTextArea>
                <S.ImgUser src={ImgUser} alt="Imagem do usuário"/>
                <S.TextArea placeholder="Digite algo legal para todos!"></S.TextArea>
            </S.SectionTextArea>
        </>
    )
}
