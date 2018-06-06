import { FETCH_SCORES, FETCH_LIVE, FETCH_TABLE } from "../actions/types";

const initialState = {
  data: [],
  liveData: [],
  table: [],
  isLoading: true,
  isLoadingLive: true,
  isLoadingTable: true
};

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
    case FETCH_TABLE:
      return {
        ...state,
        table: action.payload,
        isLoadingTable: false
      }
    default:
      return state;
  }
};

