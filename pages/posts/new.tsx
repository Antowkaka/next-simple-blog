import React from "react";
import {IPost} from "../../type";
import axios from "axios";
import { NextPageContext } from "next";

import Header from "../../layouts/Header";
import Container from "../../layouts/Container";
import PostsBlock from "../../layouts/PostsBlock";
import CRUDPostForm from "../../components/CRUDPostForm";
import Footer from "../../layouts/Footer";

const NewPost = ({title, body}: IPost): JSX.Element => {
    return (
        <>
            <Header/>
            <Container>
                <PostsBlock>
                    <CRUDPostForm/>
                </PostsBlock>
            </Container>
            <Footer/>
        </>
    )
}

/*
export async function getServerSideProps({ query }: NextPageContext): Promise<{ props: IPost }> {
    const response = await axios.get<IPost>(`https://simple-blog-api.crew.red/posts/${query.postId}?_embed=comments`);
    console.log(response);
    return {
        props: response.data
    }
}
*/

export default NewPost;
