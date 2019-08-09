import { entries as actionTypes } from '../constants/action-types';

export const addItems = items => ({
  type: actionTypes.ADD_ITEMS,
  items
});

export const clearItems = () => ({
  type: actionTypes.CLEAR_ITEMS
});
