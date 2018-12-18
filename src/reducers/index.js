import { combineReducers } from 'redux';
import postits from './postits';
import nextId from './nextId';
import filter from './filter'
import 'materialize-css/dist/css/materialize.min.css';

const rootReducer = combineReducers({
  postits,
  nextId,
  filter,
});

export default rootReducer;