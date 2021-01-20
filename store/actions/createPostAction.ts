import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILED } from '../actionTypes';
import {
  CreatePostFailedActionType,
  CreatePostRequestActionType,
  CreatePostSuccessActionType,
  IError,
  IPost,
} from '../../type';

export const createPostRequestAction = (post: IPost): CreatePostRequestActionType => ({
  type: CREATE_POST_REQUEST,
  payload: {
    post,
    loading: true,
  },
});

export const createPostSuccessAction = (status: string): CreatePostSuccessActionType => ({
  type: CREATE_POST_SUCCESS,
  payload: {
    status,
    loading: false,
  },
});

export const createPostFailedAction = (error: IError): CreatePostFailedActionType => ({
  type: CREATE_POST_FAILED,
  payload: {
    status: 'failed',
    loading: false,
    error,
  },
});
