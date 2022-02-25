import { combineReducers } from 'redux';

import sendKamas from './sendKamas';
import logedModale from './logedModale';
import registerModale from './registerModale';




export default combineReducers({
  sendKamas,logedModale,registerModale,
});
