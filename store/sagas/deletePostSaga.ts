import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, takeLatest } from '@redux-saga/core/effects';

import { DELETE_POST_REQUEST } from '../actionTypes';
import { DeletePostRequestActionType } from '../../type';
import { deletePostFailedAction, deletePostSuccessAction } from '../actions/deletePostAction';

function* deletePost({ payload }: DeletePostRequestActionType): Generator {
  const result: any = yield axios
    .delete(`https://simple-blog-api.crew.red/posts/${payload.id}`)
    .then((resolve: AxiosResponse) => {
      return {
        status: 'success',
      };
    })
    .catch((reject: AxiosError) => {
      return {
        message: reject.message,
      };
    });

  result.message
    ? yield put(deletePostFailedAction(result))
    : yield put(deletePostSuccessAction(result.status));
}

export function* deletePostWatcher(): Generator {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}
