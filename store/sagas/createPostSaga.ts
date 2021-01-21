import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, takeLatest } from '@redux-saga/core/effects';

import { CREATE_POST_REQUEST } from '../actionTypes';
import { createPostSuccessAction, createPostFailedAction } from '../actions/createPostAction';
import { CreatePostRequestActionType } from '../../type';

function* createPost({ payload }: CreatePostRequestActionType): Generator {
  const result: any = yield axios
    .post('https://simple-blog-api.crew.red/posts', payload.post, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
    ? yield put(createPostFailedAction(result))
    : yield put(createPostSuccessAction(result.status));
}

export function* createPostWatcher(): Generator {
  yield takeLatest(CREATE_POST_REQUEST, createPost);
}
