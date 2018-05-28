import {FETCH_SCORES} from '../actions/types';

const initialState = {
  data: [],
  isLoading: true
}

const sr = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SCORES:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export default sr;