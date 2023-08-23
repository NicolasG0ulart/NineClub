import React from "react";
import * as S from "./Styles"

//components
import TextArea from "./TextAreaPost/TextArea";


export default function PostingArea(){

    return(
        <S.PostingArea>
            <TextArea/>
            
            {/* <Posting/> */}
        </S.PostingArea>
    )
}