import React from "react";
import styled from "styled-components";
import Link from "next/link";

import {IPost} from "../type";

const StyledPost = styled.div`
  width: 100%;
  background-color: beige;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;

const Post = ({ id, title, body }: IPost): JSX.Element => {
    return (
        <StyledPost>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link href="/posts/[postId]" as={`/posts/${id}`}><a>Read More</a></Link>
        </StyledPost>
    )
}

export default Post;