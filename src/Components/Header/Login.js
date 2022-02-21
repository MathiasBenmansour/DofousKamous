export default function Login() {
  return (
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
      </form>
    </div>
  );
}
