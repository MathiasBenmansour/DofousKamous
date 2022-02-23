import {LOGED} from '../actions/user.js';

const INITIAL_STATE = {
    loged:false,
    
    };
    
    function logedModale(state = INITIAL_STATE, action) {
      switch (action.type) {
      
        case LOGED: {
            return {
              ...state,
              loged: !action.loged,
              
            };
          }
         
      }
      return state;
    }
    
    export default logedModale;
    