import { CLEAN_CRUD_TYPE, CLEAR_POST_STATUS } from '../actionTypes';
import { ClearStatusActionType } from '../../type';

export const clearStatusActions = (): ClearStatusActionType => ({
  type: CLEAR_POST_STATUS,
  payload: {
    status: '',
  },
});

export const clearCRUDtypeAction = () => ({
  type: CLEAN_CRUD_TYPE,
  payload: {
    CRUDType: '',
  },
});
