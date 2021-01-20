import { CLEAR_POST_STATUS } from '../actionTypes';
import { ClearStatusActionType } from '../../type';

export const clearPostStatusAction = (): ClearStatusActionType => ({
  type: CLEAR_POST_STATUS,
  payload: {
    status: '',
  },
});
