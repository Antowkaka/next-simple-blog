import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { IPost } from '../type';
import { useDispatch } from 'react-redux';
import { setCRUDtypeAction } from '../store/actions/helpActions';

const StyledPost = styled.div`
  width: 100%;
  background-color: beige;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;

const Post = ({ id, title, body }: IPost): JSX.Element => {
  const dispatch = useDispatch();

  const setCRUDType = () => {
    dispatch(setCRUDtypeAction('read'));
  };

  return (
    <StyledPost>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link href="/posts/[postId]" as={`/posts/${id}`}>
        <a onClick={setCRUDType}>Read More</a>
      </Link>
    </StyledPost>
  );
};

export default Post;
