import React from "react";
import styled from "styled-components";

const StyledPostsBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  flex-direction: column;
`;

const PostsBlock = ({ children }: any): JSX.Element => (
    <StyledPostsBlock>
        {children}
    </StyledPostsBlock>
)

export default PostsBlock;