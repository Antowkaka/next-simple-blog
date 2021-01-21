import { UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILED } from '../actionTypes';
import {
  UpdatePostFailedActionType,
  UpdatePostRequestActionType,
  UpdatePostSuccessActionType,
  IError,
  IPost,
} from '../../type';

export const updatePostRequestAction = (post: IPost): UpdatePostRequestActionType => ({
  type: UPDATE_POST_REQUEST,
  payload: {
    post,
    loading: true,
  },
});

export const updatePostSuccessAction = (post: IPost): UpdatePostSuccessActionType => ({
  type: UPDATE_POST_SUCCESS,
  payload: {
    post,
    status: 'success',
    loading: false,
  },
});

export const updatePostFailedAction = (error: IError): UpdatePostFailedActionType => ({
  type: UPDATE_POST_FAILED,
  payload: {
    status: 'failed',
    loading: false,
    error,
  },
});
