import { combineReducers } from 'redux';
import user from './modules/user';
import event from './modules/events';

const rootReducer = combineReducers({
  user,
  event,
});

export default rootReducer;
