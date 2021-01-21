import React, { EffectCallback, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { IPost } from '../type';
import { useDispatch } from 'react-redux';
import useShallowEqualSelector from '../hooks/useShallowEqualSelector';
import { SHOW_COMMENTS } from '../store/actionTypes';
import { deletePostRequestAction } from '../store/actions/deletePostAction';
import { clearStatusActions, setCRUDtypeAction } from '../store/actions/helpActions';

const StyledSinglePost = styled.div`
  width: 100%;
  background-color: #bfb7b6;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  text-align: center;
`;

const SinglePostButton = styled.button`
  background-color: ${(props) => props.color};
  outline: none;
  border-radius: 20px;
  border: none;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  box-shadow: inset 0 0 10px #000000;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    box-shadow: none;
  }
`;

const SinglePost = ({ id, title, body }: IPost): JSX.Element => {
  const {
    post: { status },
    comments: { show },
  } = useShallowEqualSelector((store) => store);
  const dispatch = useDispatch();

  const setCRUDType = () => {
    dispatch(setCRUDtypeAction('update'));
  };

  const ShowComments = (): void => {
    dispatch({ type: SHOW_COMMENTS, payload: !show });
  };

  const DeletePost = (): void => {
    dispatch(deletePostRequestAction(id));
  };

  useEffect(
    (): EffectCallback => () => {
      dispatch(clearStatusActions());
    },
    [],
  );

  return (
    <StyledSinglePost>
      <h2>Title: {title}</h2>
      <p>Body text: {body}</p>
      <Link href="/posts/[postId]/update" as={`/posts/${id}/update`}>
        <SinglePostButton color="green" as="a" onClick={setCRUDType}>
          Update
        </SinglePostButton>
      </Link>

      <SinglePostButton color="red" onClick={DeletePost}>
        Delete
      </SinglePostButton>
      <SinglePostButton color="orange" onClick={ShowComments}>
        Comments
      </SinglePostButton>
    </StyledSinglePost>
  );
};

export default SinglePost;
