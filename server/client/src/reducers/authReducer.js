import { FETCH_USER } from '../actions/types';

const authReducer = function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // return false if payload is empty
    default:
      return state;
  }
};

export default authReducer;
