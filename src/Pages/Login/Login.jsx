import React from "react";
import * as S from "./Styles"
import { useNavigate} from "react-router-dom";

export default function Login(){
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        // Lógica de envio do formulário

        // Navegação caso o dados do formulário estiver certo
        navigate('/home');
    }


    return(
        <>
            <S.Login>
                <S.Content>
                    <h3>Cadastrar-se</h3>
                    <form onSubmit={handleSubmit}>
                        <S.InputDiv>
                            <label htmlFor="user">Nome</label>
                            <input type="text" id="user" required/>
                        </S.InputDiv>
                        <S.InputDiv>
                            <label htmlFor="user">Usuário</label>
                            <input type="text" id="user" required/>
                        </S.InputDiv>
                        <S.InputDiv>
                            <input type="password" id="password" required/>
                            <label htmlFor="password">Senha</label>
                        </S.InputDiv>
                            <button type="submit">Criar</button>
                    </form>
                </S.Content>
            </S.Login>
        </>
    )
}