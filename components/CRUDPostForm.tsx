import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { IPost } from '../type';
import { createPostRequestAction } from '../store/actions/createPostAction';
import useShallowEqualSelector from '../hooks/useShallowEqualSelector';
import { updatePostRequestAction } from '../store/actions/updatePostAction';
import { useRouter } from 'next/router';

const StyledPostForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #799b71;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;

const StyledInput = styled.input`
  width: 80%;
  border-radius: 20px;
  height: 40px;
  font-size: 24px;
  border: none;
  outline: none;
  padding-left: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 80%;
  border-radius: 20px;
  height: 80px;
  font-size: 24px;
  border: none;
  outline: none;
  margin-top: 20px;
  resize: none;
  padding-left: 20px;
`;

const StyledButton = styled.input`
  width: 80%;
  background-color: #0070f3;
  border-radius: 20px;
  height: 40px;
  font-size: 24px;
  border: none;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    background-color: #464b4e;
  }
`;

const StyledError = styled.div`
  width: 80%;
  height: 40px;
  margin-top: 10px;
  background-color: #eeeeee;
  border-radius: 20px;
  color: darkred;
  text-align: center;
  padding: 5px 0;
  text-transform: uppercase;
  font-weight: bold;
`;

const CRUDPostForm = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<IPost>();
  const {
    post: { post, CRUDType, status },
    posts: { posts },
  } = useShallowEqualSelector((state) => state);

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data) => {
    switch (CRUDType) {
      case 'create':
        {
          data.id = posts.length + 1;
          dispatch(createPostRequestAction(data));
        }
        break;
      case 'update':
        {
          data.id = router.query.postId;
          dispatch(updatePostRequestAction(data));
        }
        break;
    }
  };

  return (
    <StyledPostForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        name="title"
        type="text"
        defaultValue={CRUDType !== 'create' ? post.title : ''}
        placeholder="Post title"
        ref={register({ required: true })}
      />
      {errors.title && <StyledError>Title is required</StyledError>}
      <StyledTextarea
        name="body"
        defaultValue={CRUDType !== 'create' ? post.body : ''}
        placeholder="Post body"
        ref={register({ required: true, minLength: 20 })}
      />
      {errors.body && <StyledError>Text is required and must contain min. 20 symbols</StyledError>}
      <StyledButton type="submit" value={CRUDType.toUpperCase()} />
      {status === 'success' && <p>Success</p>}
    </StyledPostForm>
  );
};

export default CRUDPostForm;
