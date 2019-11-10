import { combineReducers } from 'redux';
import AddWordsReducer from './AddWordsReducer';
import SetFindWords from './SetFindWords';

const AllReducers = combineReducers({
  myWords: AddWordsReducer,
  searchingWord: SetFindWords,
});

export default AllReducers;
