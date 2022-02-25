import { useSelector, useDispatch } from "react-redux";
import { modaleLoged} from "../../actions/user";
import Register from "../Register/Register";

export default function Login() {
  const logedUser = useSelector((state) => state.logedModale.login);

  const dispatch = useDispatch();

  const logModale = () => {
    dispatch(modaleLoged());
  };

  return (
    <div className="login-modal">
      <button className="header-login" onClick={logModale}>
        Connexion
      </button>
      <Register />

      {logedUser && (
        <div>
          <form className="login">
            <label className="mail">
              E-mail* :
              <input type="text" name="name" value="Entrez votre E-mail" />
            </label>
            <label className="message-form">
              Mot de passe* :
              <input
                type="text"
                name="name"
                value="Entrez votre Mot de passe"
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
