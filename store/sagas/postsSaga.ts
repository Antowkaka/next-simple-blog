import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, takeLatest } from '@redux-saga/core/effects';

import { GET_POSTS_REQUEST } from '../actionTypes';
import { getPostsSuccessAction, getPostsFailedAction } from '../actions/getPostsAction';

function* getPosts() {
  const result = yield axios
    .get('https://simple-blog-api.crew.red/posts')
    .then((resolve: AxiosResponse) => {
      return {
        posts: resolve.data,
      };
    })
    .catch((reject: AxiosError) => {
      return {
        message: reject.message,
      };
    });
  result.message
    ? yield put(getPostsFailedAction(result))
    : yield put(getPostsSuccessAction(result.posts));
}

export function* getPostsWatcher(): Generator {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
}
