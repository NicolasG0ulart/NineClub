import React from "react";
import * as S from "./Styles"

// LinkS === Link React Router Dom + Stylized
import { LinkS } from "../App";


export default function Header(){

    return(
        <S.Header>
            <LinkS to="/">
                <p>NineClub<span>beta</span></p>
            </LinkS>
        </S.Header>
    )
}