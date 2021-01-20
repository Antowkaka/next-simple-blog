import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  CLEAR_POST_STATUS,
} from '../actionTypes';
import { CreatePostActionType, PostState } from '../../type';

const initialState: PostState = {
  post: {
    title: '',
    body: '',
  },
  status: '',
  loading: false,
};

export const createPostReducer = (
  state: PostState = initialState,
  { type, payload }: CreatePostActionType,
): PostState => {
  switch (type) {
    case CREATE_POST_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case CREATE_POST_FAILED:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_POST_STATUS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
