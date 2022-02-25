import './register.css'
import {useSelector,useDispatch} from 'react-redux';
import {registerModale} from '../../actions/user';


export default function Register() {

    const register = useSelector((state) => state.registerModale.register)

    const dispatch = useDispatch();

    const registerModal = () => {
        dispatch(registerModale());
    }


    return (
        <div>
            <button className="header-login" onClick={registerModal}>Inscription</button>

{register && 
  (
    <div>
    <form className="register">
       <label className="mail">
         E-mail* :
         <input type="text" name="name" value="Entrez votre E-mail" />
       </label>
       <label className="message-form">
         Mot de passe* :
         <input type="text" name="name" value="Entrez votre Mot de passe" />
       </label>
       <div className='btn-log'>
     <button>Inscription</button>
       </div>
     </form>
     </div>
     

  )}</div>
)}
