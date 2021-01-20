import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILED } from '../actionTypes';
import { GetPostsActionType, PostsState } from '../../type';

const initialState: PostsState = {
  posts: [],
  loading: false,
};

export const getPostsReducer = (
  state: PostsState = initialState,
  { type, payload }: GetPostsActionType,
) => {
  switch (type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
