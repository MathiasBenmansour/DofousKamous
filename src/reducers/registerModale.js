import {REGISTER} from '../actions/user.js';
import {CLOSEBUTTON} from '../actions/user.js';

const INITIAL_STATE = {
    register:false,
    closemodal:true,
    
    };
    
    function registerModale(state = INITIAL_STATE, action) {
      switch (action.type) {
      
        case REGISTER: {
            return {
              ...state,
              register: !action.register,
              
            };

            
          }
          case CLOSEBUTTON: {
            return {
              ...state,
              closemodal: !action.closemodal,
              
            };

            
          };
         
      }
      return state;
    }
    
    export default registerModale;