import axios from "axios";
import { put, takeLatest } from "@redux-saga/core/effects";

import { GET_POSTS_REQUEST } from "../actionTypes";
import { getPostsSuccessAction, getPostsFailedAction } from "../actions/getPostsAction";

function* getPosts() {
    const result = yield axios.get('https://simple-blog-api.crew.red/posts')
        .then(resolve => {
            return {
                posts: resolve.data
            };
        })
        .catch(reject => {
            return {
                status: 404,
                error: reject.message
            };
        });
    result.error ? yield put(getPostsFailedAction(result)) : yield put(getPostsSuccessAction(result.posts));
}

export function* getPostsWatcher(): Generator {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
}
