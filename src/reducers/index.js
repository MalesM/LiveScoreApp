import {combineReducers} from 'redux';
import {allScores, liveScores} from './scoresReducer';

export default combineReducers({
  scores: allScores,
  
})