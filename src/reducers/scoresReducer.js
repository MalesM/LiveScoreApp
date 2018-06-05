import { FETCH_SCORES, FETCH_LIVE } from "../actions/types";

const initialState = {
  data: [],
  liveData: [],
  isLoading: true,
  isLoadingLive: true
};

/* const initialStateLive = {
  liveData: [],
  isLoading: true
}; */

export const allScores = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCORES:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case FETCH_LIVE: {
      const live = state.data.filter(elem => elem.time.includes('Q'))
      return {
        ...state,
        liveData: live,
        isLoadingLive: false
      };
    }
    default:
      return state;
  }
};

/* export const liveScores = (state = initialStateLive, action) => {
  switch (action.type) {
    case FETCH_LIVE:
      return {
        liveData: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}; */

//export default sr;
