import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILED } from '../actionTypes';
import {IError, IPost} from "../../type";

export const createPostRequestAction = () => ({
    type: CREATE_POST_REQUEST,
    payload: {
        loading: true

    }
})

export const createPostSuccessAction = (posts: IPost[]) => ({
    type: CREATE_POST_SUCCESS,
    payload: {
        loading: false,
        posts: posts
    }
})

export const createPostFailedAction = (error: IError) => ({
    type: CREATE_POST_FAILED,
    payload: {
        loading: false,
        error: error
    }
})