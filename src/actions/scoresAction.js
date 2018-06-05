import { FETCH_SCORES, FETCH_LIVE } from "./types";

const URL = "https://dd158d5d.ngrok.io/basketball";

export const fetchScores = () => dispatch => {
  fetch("https://367b6a9b.ngrok.io/basketball")
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

/* export const fetchLive = () => dispatch => {
  fetch("https://ca2d1976.ngrok.io/basketball")
    .then(response => response.json())
    .then(responseJson => {
      let live = responseJson.filter(elem => elem.time.includes('FT'))
      dispatch({
        type: FETCH_LIVE,
        payload: live
      });
    });
}; */
