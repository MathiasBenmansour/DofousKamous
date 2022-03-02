import {LOGIN} from '../actions/user.js';
import {TEXTLOGIN} from '../actions/user.js';

const INITIAL_STATE = {
    login:false,
    mail:'',
    password:'',
    name:'',
    
    
    };
    
    function logedModale(state = INITIAL_STATE, action) {
      switch (action.type) {
      
        case LOGIN: 
            return {
              ...state,
              login: !action.login,
              
            };
          
          case TEXTLOGIN: 
            return {
              ...state,
              [action.name]: action.value,

              
            
          };
          
          
     
        
        default:
      return state;
    }
  }
    
    export default logedModale;
    