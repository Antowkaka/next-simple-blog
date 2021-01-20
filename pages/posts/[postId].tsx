import React from "react";
import axios from "axios";
import { NextPageContext } from "next";

import Header from "../../layouts/Header";
import Container from "../../layouts/Container";
import PostsBlock from "../../layouts/PostsBlock";
import Post from "../../components/Post";
import Footer from "../../layouts/Footer";
import {IPost} from "../../type";

const OnePost = ({title, body}: IPost): JSX.Element => {
    return (
        <>
            <Header/>
                <Container>
                    <PostsBlock>
                        <Post title={title} body={body}/>
                    </PostsBlock>
                </Container>
            <Footer/>
        </>
    )
}

export async function getServerSideProps({ query }: NextPageContext): Promise<{ props: IPost }> {
    const response = await axios.get<IPost>(`https://simple-blog-api.crew.red/posts/${query.postId}?_embed=comments`);
    return {
        props: response.data
    }
}

export default OnePost;
