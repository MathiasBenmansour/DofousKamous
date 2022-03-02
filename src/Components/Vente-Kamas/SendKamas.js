import "./sendkamas.css";
import enu from "../../img/Perso/enu.png"
import iop from "../../img/Perso/Eratz.png"
import { useSelector, useDispatch } from "react-redux";
import { setModale, closeDisplayModale, MODALE } from "../../actions/user";

export default function SendKamas() {
  const modaling = useSelector((state) => state.sendKamas.modal);

  const dispatch = useDispatch();

  const modale = () => {
    dispatch({
      type: MODALE,
    });
   
  };
  
  const closeModale = () => {
    dispatch(closeDisplayModale());
  };

  return (
    <article className="send-kamas">
      <img className="dofus2" src={enu} alt="Dofus 2" />

      <button className="button-kamas" onClick={modale}>
        Dofus 2.0
      </button>
      <article className="dofus-retro">
        <img className="dofus-retro-img" src={iop} alt="Dofus Rétro" />
        <button className="button-retro" onClick={modale}>
          Dofus 1.29
        </button>
      </article>



      {modaling && (
        <div className="modal">
          <p className="description-modal">
            Etes-vous sûr de vendre des kamas sur Dofus ?
          </p>

          <button className="confirm-modal" onClick={closeModale}>
            Oui
          </button>
          <button className="cancel-modal" onClick={closeModale}>
            Non
          </button>
        </div>
      )}
    </article>
  );
}
