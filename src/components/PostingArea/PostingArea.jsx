import React from "react";
import * as S from "./Styles"

//components
import TextArea from "./TextAreaPost/TextArea";
import Post from "./Post/Post";


export default function PostingArea(){

    return(
        <S.PostingArea>
            <TextArea/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </S.PostingArea>
    )
}