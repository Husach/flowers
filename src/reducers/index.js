import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import flowers from './flowers';

export default combineReducers({
  routing: routerReducer,
  flowers
});
