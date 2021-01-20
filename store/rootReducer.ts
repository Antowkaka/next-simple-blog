import { combineReducers } from 'redux';
import { getPostsReducer } from './reducers/getPostsReducer';
import { createPostReducer } from './reducers/createPostReducer';

const rootReducer = combineReducers({ posts: getPostsReducer, post: createPostReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
