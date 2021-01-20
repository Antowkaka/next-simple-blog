import { all } from 'redux-saga/effects';
import { getPostsWatcher } from '../sagas/postsSaga';
import { createPostWatcher } from '../sagas/createPostSaga';

export function* rootSaga(): Generator {
  yield all([getPostsWatcher(), createPostWatcher()]);
}
