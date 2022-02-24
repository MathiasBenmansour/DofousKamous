import "./sendkamas.css";
import enu from "./enu.png";
import iop from "./Eratz.png";
import { useSelector, useDispatch } from "react-redux";
import { setModale,closeDisplayModale } from "../../actions/user";

export default function SendKamas() {
  const modaling = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const modale = () => {
    dispatch(setModale());
  };

  const closeModale = () => {
    dispatch(closeDisplayModale())
  }

  return (
    <div className="send-kamas">
      <img className="dofus2" src={enu} alt="Dofus 2" />
      <button className="button-kamas" onClick={modale}>
        Dofus 2.0
      </button>
      <img className="dofus-retro" src={iop} alt="Dofus Rétro" />
      <button className="button-retro" onClick={modale}>
        Dofus 1.29
      </button>

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
      
    </div>
  );
}
