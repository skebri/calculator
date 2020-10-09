import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import general from './generalReducer';
import modal from './modalReducer';

export default combineReducers({
  form,
  general,
  modal,
});
