import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
      navigate("/");
  }

  return (
    <div className="notfound">
      <h1>Oupppppp's je n'ai plus assez de cawottes pour trouver la page</h1>
      <button onClick={goHome}>
          Retourner à l'acceuil
          </button>
    </div>
  );
}

export default NotFound;
