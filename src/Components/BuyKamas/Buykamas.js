import "./buykama.css";
import React from "react";
import serveur from "../../data/data";

export default function Buykamas() {
  return (
    <div className="description-buy">
      <h1>Achat de kamas !</h1>
      <label className="choose-serv">
        Choix du serveur:
        <select className="list-serv" name="serveur" value="">
         
          {
          serveur.map((elem) => (
            <option key="">{elem.name}</option>
          ))
          }

          
        </select>
      </label>
    </div>
  );
}
