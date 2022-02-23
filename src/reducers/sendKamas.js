import {MODALE} from '../actions/user.js';
import {CLOSEMODAL} from '../actions/user.js';

const INITIAL_STATE = {
modal:false,

};

function sendKamas(state = INITIAL_STATE, action) {
  switch (action.type) {
  
    case MODALE: 
        return {
          ...state,
          modal: !action.modal,
          
        };
      
      case CLOSEMODAL: 
        return {
          ...state,
          modal: action.modal,
          
        };
      
  }
  return state;
}

export default sendKamas;
