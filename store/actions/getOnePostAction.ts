import { GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILED } from '../actionTypes';
import {
  GetPostFailedActionType,
  GetPostRequestActionType,
  GetPostSuccessActionType,
  IError,
  IPost,
  PostState,
} from '../../type';

export const getPostRequestAction = (id: number): GetPostRequestActionType => ({
  type: GET_POST_REQUEST,
  payload: {
    post: {
      id,
      title: '',
      body: '',
    },
    CRUDType: 'read',
    loading: true,
  },
});

export const getPostSuccessAction = ({ post, status }: PostState): GetPostSuccessActionType => ({
  type: GET_POST_SUCCESS,
  payload: {
    post,
    status,
    loading: false,
  },
});

export const getPostFailedAction = (error: IError): GetPostFailedActionType => ({
  type: GET_POST_FAILED,
  payload: {
    status: 'failed',
    loading: false,
    error,
  },
});
