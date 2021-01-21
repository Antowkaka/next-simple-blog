import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, takeLatest } from '@redux-saga/core/effects';

import { GET_POST_REQUEST } from '../actionTypes';
import { getPostSuccessAction, getPostFailedAction } from '../actions/getOnePostAction';
import { GetPostRequestActionType } from '../../type';

function* getPost({ payload }: GetPostRequestActionType): Generator {
  const result: any = yield axios
    .get(`https://simple-blog-api.crew.red/posts/${payload.post.id}`, {
      params: {
        _embed: 'comments',
      },
    })
    .then((resolve: AxiosResponse) => {
      return {
        post: resolve.data,
        status: 'success',
      };
    })
    .catch((reject: AxiosError) => {
      return {
        message: reject.message,
      };
    });

  result.message ? yield put(getPostFailedAction(result)) : yield put(getPostSuccessAction(result));
}

export function* getPostWatcher(): Generator {
  yield takeLatest(GET_POST_REQUEST, getPost);
}
