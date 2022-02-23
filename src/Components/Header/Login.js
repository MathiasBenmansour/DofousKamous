import {useSelector,useDispatch} from 'react-redux';
import {modaleLoged,setModale} from '../../actions/user';




export default function Login() {

const loged = useSelector((state) => state.loged);

const dispatch = useDispatch();

const logModale = () => {
  dispatch(modaleLoged());
}





  return (
   
    <div>
      <button className="header-login" onClick={logModale}>Se Connecter</button>
     
     {loged&& (
       <div>
     <form className="login">
        <label className="mail">
          E-mail :
          <input type="text" name="name" value="Entrez votre E-mail" />
        </label>
        <label className="message-form">
          Votre demande :
          <input type="text" name="name" value="Entrez votre message" />
        </label>
        <input className="send-message" type="submit" value="Envoyer" />
      </form></div>
     )}     
     
   
     
    </div>
   
  );
}
