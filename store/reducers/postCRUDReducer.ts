import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  CLEAR_POST_STATUS,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
  CLEAN_CRUD_TYPE,
} from '../actionTypes';
import {
  CreatePostActionType,
  DeletePostActionType,
  GetOnePostActionType,
  PostState,
} from '../../type';

const initialState: PostState = {
  post: {
    title: '',
    body: '',
  },
  CRUDType: '',
  status: '',
  loading: false,
};

export const postCRUDReducer = (
  state: PostState = initialState,
  { type, payload }: CreatePostActionType | GetOnePostActionType | DeletePostActionType,
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
    case GET_POST_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case GET_POST_FAILED:
      return {
        ...state,
        ...payload,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case DELETE_POST_FAILED:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_POST_STATUS:
      return {
        ...state,
        ...payload,
      };
    case CLEAN_CRUD_TYPE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
