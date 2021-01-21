import { all } from 'redux-saga/effects';
import { getPostsWatcher } from '../sagas/postsSaga';
import { createPostWatcher } from '../sagas/createPostSaga';
import { getPostWatcher } from '../sagas/getOnePostSaga';
import { deletePostWatcher } from '../sagas/deletePostSaga';
import { updatePostWatcher } from '../sagas/updatePostSaga';

export function* rootSaga(): Generator {
  yield all([
    getPostsWatcher(),
    createPostWatcher(),
    getPostWatcher(),
    deletePostWatcher(),
    updatePostWatcher(),
  ]);
}
