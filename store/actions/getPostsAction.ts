import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILED } from '../actionTypes';
import {IError, IPost} from "../../type";

export const getPostsRequestAction = () => ({
    type: GET_POSTS_REQUEST,
    payload: {
        loading: true
    }
})

export const getPostsSuccessAction = (posts: IPost[]) => ({
    type: GET_POSTS_SUCCESS,
    payload: {
        loading: false,
        posts: posts
    }
})

export const getPostsFailedAction = (error: IError) => ({
    type: GET_POSTS_FAILED,
    payload: {
        loading: false,
        error: error
    }
})