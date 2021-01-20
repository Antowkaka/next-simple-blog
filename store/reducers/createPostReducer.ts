import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILED } from "../actionTypes";
import { CreatePostActionType, PostState } from "../../type";

const initialState: PostState = {
    post: {
        title: '',
        body: ''
    },
    status: '',
    loading: false
}

export const createPostReducer = (state: PostState = initialState, { type, payload }: CreatePostActionType) => {
    switch (type) {
        case CREATE_POST_REQUEST:
            return {
                ...state,
                ...payload,
            };
        case CREATE_POST_SUCCESS:
    }
}

