import { FETCH_SCORES, FETCH_LIVE, FETCH_TABLE } from "./types";

const baseURL = 'YOUR_API_HERE'
const scoresURL = baseURL+"/basketball";
const tableURL = baseURL+"/basketball/table";

export const fetchScores = () => dispatch => {
  fetch(scoresURL)
    .then(response => response.json())
    .then(responseJson =>
      dispatch({
        type: FETCH_SCORES,
        payload: responseJson
      })
    );
};

export const fetchLive = () => ({
 type: FETCH_LIVE
})

export const fetchTable = () => dispatch => {
  fetch(tableURL)
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: FETCH_TABLE,
        payload: responseJson
      });
    });
};
