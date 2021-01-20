import { combineReducers } from "redux";
import { getPostsReducer } from "./reducers/getPostsReducer";

const rootReducer = combineReducers({ post: getPostsReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;