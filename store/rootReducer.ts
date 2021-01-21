import { combineReducers } from 'redux';
import { getPostsReducer } from './reducers/getPostsReducer';
import { postCRUDReducer } from './reducers/postCRUDReducer';
import { commentsReducer } from './reducers/commentsReducer';

const rootReducer = combineReducers({
  posts: getPostsReducer,
  post: postCRUDReducer,
  comments: commentsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
