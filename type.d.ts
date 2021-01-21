import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  CLEAR_POST_STATUS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
} from '/store/actionTypes';
import { AnyAction, Store } from 'redux';
import { Task } from '@redux-saga/types';

// Main interface for Comment object
interface IComment {
  postId: number;
  body: string;
  id: number;
}

// Main interface for Post object
interface IPost {
  id?: number;
  title: string;
  body: string;
  comments?: IComment[];
}

// Main interface for Errors from server or Promise
interface IError {
  statusCode?: number;
  message: string;
}

// Interface for extending DefaultReduxStore
interface SagaStore extends Store<State, AnyAction> {
  sagaTask: Task;
}

// State for fetching all posts from server
type PostsState = {
  posts: IPost[];
  loading: boolean;
  error?: IError;
};

// State for CRUD operations for single post
type PostState = {
  post: IPost;
  CRUDType: string;
  status: string;
  loading: boolean;
  error?: IError;
};

// Get posts actions
type GetPostsRequestActionType = {
  type: typeof GET_POSTS_REQUEST;
  payload: {
    loading: boolean;
  };
};

type GetPostsSuccessActionType = {
  type: typeof GET_POSTS_SUCCESS;
  payload: {
    loading: boolean;
    posts: IPost[];
  };
};

type GetPostsFailedActionType = {
  type: typeof GET_POSTS_FAILED;
  payload: {
    loading: boolean;
    error: IError;
  };
};

// Create post actions
type CreatePostRequestActionType = {
  type: typeof CREATE_POST_REQUEST;
  payload: {
    post: IPost;
    loading: boolean;
  };
};

type CreatePostSuccessActionType = {
  type: typeof CREATE_POST_SUCCESS;
  payload: {
    status: string;
    loading: boolean;
  };
};

type CreatePostFailedActionType = {
  type: typeof CREATE_POST_FAILED;
  payload: {
    status: string;
    loading: boolean;
    error: IError;
  };
};

// Read single post actions
type GetPostRequestActionType = {
  type: typeof GET_POST_REQUEST;
  payload: {
    post: IPost;
    CRUDType: string;
    loading: boolean;
  };
};

type GetPostSuccessActionType = {
  type: typeof GET_POST_SUCCESS;
  payload: {
    post: IPost;
    status: string;
    loading: boolean;
  };
};

type GetPostFailedActionType = {
  type: typeof GET_POST_FAILED;
  payload: {
    status: string;
    loading: boolean;
    error: IError;
  };
};

// Delete single post actions
type DeletePostRequestActionType = {
  type: typeof DELETE_POST_REQUEST;
  payload: {
    id: number;
    CRUDType: string;
    loading: boolean;
  };
};

type DeletePostSuccessActionType = {
  type: typeof DELETE_POST_SUCCESS;
  payload: {
    status: string;
    loading: boolean;
  };
};

type DeletePostFailedActionType = {
  type: typeof DELETE_POST_FAILED;
  payload: {
    status: string;
    loading: boolean;
    error: IError;
  };
};

// Type for Action which clear status field from PostState
type ClearStatusActionType = {
  type: typeof CLEAR_POST_STATUS;
  payload: {
    status: string;
  };
};

// Combine posts actions for Reducer`s switch
type GetPostsActionType =
  | GetPostsRequestActionType
  | GetPostsSuccessActionType
  | GetPostsFailedActionType;

type CreatePostActionType =
  | CreatePostRequestActionType
  | CreatePostSuccessActionType
  | CreatePostFailedActionType;

type GetOnePostActionType =
  | GetPostRequestActionType
  | GetPostSuccessActionType
  | GetPostFailedActionType;

type DeletePostActionType =
  | DeletePostRequestActionType
  | DeletePostSuccessActionType
  | DeletePostFailedActionType;
