import { entries as actionTypes } from '../constants/action-types';

const defaultState = {
  items: []
};

const entries = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEMS:
      return {
        ...state,
        items: state.items.concat(action.items)
      };
    case actionTypes.CLEAR_ITEMS:
      return {
        ...state,
        items: []
      };
    default:
      return state
  }
};

export default entries;
