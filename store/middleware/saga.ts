import { all } from 'redux-saga/effects';
import {getPostsWatcher} from "../sagas/postsSaga";

export function* rootSaga(): Generator {
    yield all([
        getPostsWatcher()
    ]);
}