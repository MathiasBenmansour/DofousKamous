import {LOGIN} from '../actions/user.js';

const INITIAL_STATE = {
    login:false,
    
    };
    
    function logedModale(state = INITIAL_STATE, action) {
      switch (action.type) {
      
        case LOGIN: {
            return {
              ...state,
              login: !action.login,
              
            };
          };
         
      }
      return state;
    }
    
    export default logedModale;
    