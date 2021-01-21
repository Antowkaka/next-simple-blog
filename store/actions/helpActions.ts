import { SET_CRUD_TYPE, CLEAR_POST_STATUS } from '../actionTypes';
import { ClearStatusActionType, SetCRUDTypeActionType } from '../../type';

export const clearStatusActions = (): ClearStatusActionType => ({
  type: CLEAR_POST_STATUS,
  payload: {
    status: '',
  },
});

export const setCRUDtypeAction = (crudType: string): SetCRUDTypeActionType => ({
  type: SET_CRUD_TYPE,
  payload: {
    CRUDType: crudType,
  },
});
