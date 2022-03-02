import { useSelector, useDispatch } from "react-redux";
import { modaleLoged,textLogin} from "../../actions/user";
import Register from "../Register/Register";

export default function Login() {
  const { login,mail,password,name} = useSelector((state) => state.logedModale);

  const dispatch = useDispatch();

  const logModale = () => {
    dispatch(modaleLoged());
  };

  const setMail = (e) => {
    dispatch(textLogin(e.target.mail,e.target.value))
  };

  return (
    <div className="login-modal">
      <button className="header-login" onClick={logModale}>
        Connexion
      </button>
      <Register />

      {login && (
        <div>
          <form className="login">
            <label className="mail">
              E-mail* :
              <input onChange={setMail}
              type="email" name="email" 
              
               />
            </label>
            <label className="message-form">
              Mot de passe* :
              <input onChange={setMail}
                type="password"
                name="paswword"
                
              />
            </label>
            <div className="btn-log">
              <input className="send-log" type="submit" value="Connexion" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
