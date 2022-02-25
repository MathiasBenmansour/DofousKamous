import './notfound.css';

import { useNavigate } from "react-router-dom";


function NotFound() {
  const navigate = useNavigate();

  const goLog = () => {
      navigate("/");
  }

  return (
    <div className="notfound">
      <h1 className='error'>404 </h1>
      <h1 className='description-error'>Oupppppp's je n'ai plus assez de cawottes pour trouver la page</h1>
      <button  className="error-page"onClick={goLog}>
          Retourner à l'acceuil
          </button>
          
    </div>
  );
}

export default NotFound;
