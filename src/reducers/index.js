import {combineReducers} from 'redux';
import sr from './scoresReducer';

export default combineReducers({
  scores: sr
})