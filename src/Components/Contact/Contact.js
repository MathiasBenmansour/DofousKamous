import "./contact.css";
import mail from '../../img/icons/email.png';
import phone from '../../img/icons/smartphone.png';
import name from '../../img/icons/name.jpg';
import message from '../../img/icons/message.jpg';

export default function Contact() {
  return (
    <form className="form-contact">
       <input className="close-form" type="submit" value="x" />
      <label className="mail">
      <img  className="name-icons"src={name} alt="Mail" /> 
        
        <input type="text" name="name" value="Entrez votre Nom" />
      </label>
      <label className="mail">
        <input type="text" name="name" value="Entrez votre E-mail "/> 
        <img  className="mail-icons"src={mail} alt="Mail" /> 
       
        <img  className="phone-icons"src={phone} alt="Mail" /> 

        <input type="text" name="name" value="Entrez votre numéro" />
      </label>
      <label className="message-form">
      <img  className="name-icons"src={message} alt="Mail" /> 
        
        <input  className="mail-input"type="text" name="name" value="Entrez votre message" />
      
      </label>
      
      <input className="send-message" type="submit" value="Envoyer" />
     
    </form>
  );
}
