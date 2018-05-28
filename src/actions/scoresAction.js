import {FETCH_SCORES} from './types';

const URL = 'https://dd158d5d.ngrok.io/basketball';

export const fetchScores = () => dispatch => {
  fetch('https://dd158d5d.ngrok.io/basketball')
    .then(response => response.json())
    .then(responseJson => dispatch({
      type: FETCH_SCORES,
      payload: responseJson
    }))
}