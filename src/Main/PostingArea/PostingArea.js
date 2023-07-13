import React from "react";
import * as S from "./Styles"

// image
import ImgUser from "../../assets/img-default-user.jpg"


//components
import Posting from "../../components/Posting/Posting";

export default function PostingArea(){

    return(
        <S.PostingArea>
            <S.APostingDefault>
                <S.ImgUser src={ImgUser} alt="Imagem do usuário"/>
                <S.InputPosting placeholder="Escreva algo legal para todos (:"/>
            </S.APostingDefault>
            
            <Posting/>
        </S.PostingArea>
    )
}