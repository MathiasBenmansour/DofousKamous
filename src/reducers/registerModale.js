import {REGISTER} from '../actions/user.js';

const INITIAL_STATE = {
    register:false,
    
    };
    
    function registerModale(state = INITIAL_STATE, action) {
      switch (action.type) {
      
        case REGISTER: {
            return {
              ...state,
              register: !action.register,
              
            };
          };
         
      }
      return state;
    }
    
    export default registerModale;