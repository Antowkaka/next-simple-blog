import { SHOW_COMMENTS } from '../actionTypes';

type CommentsState = {
  show: boolean;
};

const initialState: CommentsState = {
  show: false,
};

export const commentsReducer = (state: CommentsState = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_COMMENTS:
      return {
        ...state,
        ...{
          show: payload,
        },
      };
    default:
      return state;
  }
};
