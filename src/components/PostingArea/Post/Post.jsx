import React from "react";
import * as S from "./Styles"

//images
import ImgUser from "../../../assets/img-default-user.jpg"

//icons
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BsFillChatSquareDotsFill } from "react-icons/bs";

export default function Post(){

    return(
        <>
            <S.Post>
                <S.ImgUser src={ImgUser} alt="Imagem do usuário"/>
                <S.InfosUser>
                    <S.NameUser>
                        <h3>Nicolas Goulart</h3>
                        <p>@nicolasgoulart</p>
                    </S.NameUser>
                    <S.ContentPost>
                        <p>
                        Pequeno discurso que eu estou digitando neste momento para simular um  novo post
                        Pequeno discurso que eu estou digitando neste momento para simular um  novo post
                        Pequeno discurso que eu estou digitando neste momento para simular um  novo post
                        Pequeno discurso que eu estou digitando neste momento para simular um  novo post
                        Pequeno discurso que eu estou digitando neste momento para simular um  novo post
                        Pequeno discurso que eu estou digitando neste momento para simular um  novo post
                        Pequeno discurso que eu estou digitando neste momento para simular um  novo post
                        </p>
                    </S.ContentPost>
                    <S.Buttons>
                        <button type="button"><AiFillLike size={20}/>34</button>
                        <button type="button"><AiFillDislike size={20}/>13</button>
                        <button type="button"><BsFillChatSquareDotsFill size={20}/>Mensagem</button>
                    </S.Buttons>
                </S.InfosUser>
            </S.Post>
        </>
    )
}