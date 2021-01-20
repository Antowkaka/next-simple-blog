import { GET_POSTS_REQUEST,
         GET_POSTS_SUCCESS,
         GET_POSTS_FAILED,
         CREATE_POST_REQUEST,
         CREATE_POST_SUCCESS,
         CREATE_POST_FAILED
} from '/store/actionTypes';

// Main interface for Post object
interface IPost {
    id?: number
    title: string
    body: string
    comments?: [
        {
            id: number
            postId: number
            body: string
        }
    ]
}

// Main interface for Errors from server or Promise
interface IError {
    statusCode?: number
    message: string
}

// State for fetching all posts from server
type PostsState = {
    posts: IPost[],
    loading: boolean,
    error?: IError
}

// State for CRUD operations for single post
type PostState = {
    post: IPost
    status: string
    loading: boolean
    error?: IError
}

// Get posts actions
type GetPostsRequestActionType = {
    type: typeof GET_POSTS_REQUEST
    payload: {
        loading: boolean
    }
}

type GetPostsSuccessActionType = {
    type: typeof GET_POSTS_SUCCESS,
    payload: {
        loading: boolean
        posts: IPost[]
    }
}

type GetPostsFailedActionType = {
    type: typeof GET_POSTS_FAILED,
    payload: {
        loading: boolean
        error: IError
    }
}

// Create post actions
type CreatePostRequestActionType = {
    type: typeof CREATE_POST_REQUEST
    payload: {
        post: IPost
        loading: boolean
    }
}

type CreatePostSuccessActionType = {
    type: typeof CREATE_POST_SUCCESS,
    payload: {
        status: string
        loading: boolean
    }
}

type CreatePostFailedActionType = {
    type: typeof CREATE_POST_FAILED,
    payload: {
        status: string
        loading: boolean
        error: IError
    }
}

// Combine posts actions for Reducer`s switch
type GetPostsActionType = GetPostsRequestActionType | GetPostsSuccessActionType | GetPostsFailedActionType;
type CreatePostActionType = CreatePostRequestActionType | CreatePostSuccessActionType | CreatePostFailedActionType;

