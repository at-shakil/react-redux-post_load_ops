import * as types from '../constants/ActionTypes';

const initialState = {
  postLoadMessage: ""
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.SET_POST_LOAD_MESSAGE:
      return Object.assign({}, state, {postLoadMessage: action.message});
    default:
      return state;
  }
};
