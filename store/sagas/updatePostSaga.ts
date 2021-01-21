import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, takeLatest } from '@redux-saga/core/effects';

import { UPDATE_POST_REQUEST } from '../actionTypes';
import { UpdatePostRequestActionType } from '../../type';
import { updatePostFailedAction, updatePostSuccessAction } from '../actions/updatePostAction';

function* updatePost({ payload }: UpdatePostRequestActionType): Generator {
  const result: any = yield axios
    .put(`https://simple-blog-api.crew.red/posts/${payload.post.id}`, payload.post)
    .then((resolve: AxiosResponse) => {
      return {
        post: resolve.data,
      };
    })
    .catch((reject: AxiosError) => {
      return {
        message: reject.message,
      };
    });

  result.message
    ? yield put(updatePostFailedAction(result))
    : yield put(updatePostSuccessAction(result.post));
}

export function* updatePostWatcher(): Generator {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}
