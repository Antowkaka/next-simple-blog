import { DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILED } from '../actionTypes';
import {
  DeletePostFailedActionType,
  DeletePostRequestActionType,
  DeletePostSuccessActionType,
  IError,
} from '../../type';

export const deletePostRequestAction = (id: number): DeletePostRequestActionType => ({
  type: DELETE_POST_REQUEST,
  payload: {
    CRUDType: 'delete',
    id,
    loading: true,
  },
});

export const deletePostSuccessAction = (status: string): DeletePostSuccessActionType => ({
  type: DELETE_POST_SUCCESS,
  payload: {
    CRUDType: '',
    status,
    loading: false,
  },
});

export const deletePostFailedAction = (error: IError): DeletePostFailedActionType => ({
  type: DELETE_POST_FAILED,
  payload: {
    CRUDType: '',
    status: 'failed',
    loading: false,
    error,
  },
});
