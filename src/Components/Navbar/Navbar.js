import "./menu.css";
import { Link, NavLink } from "react-router-dom";


function Menu() {
  return (
    <div className="menu-nav">
      <nav>
        <NavLink
         
          to="/"
          className={({ isActive }) => isActive ? "activeLink" : "nav-tuto"}
        >
          Home
        </NavLink>
        <NavLink
          
          to="/achat"
          className={({ isActive }) =>isActive ? "activeLink" : "nav-buy"}
        >
          Achat Kamas
        </NavLink>
        <NavLink
          
          to="/vente"
          className={({ isActive }) =>  isActive ? "activeLink" : "nav-send"}
        >
        Vente Kamas
        </NavLink>
        <NavLink
         
          to="/contact"
          className={({ isActive }) => isActive ? "activeLink" : "nav-contact"}
        >
          contact
        </NavLink>
      </nav>
      
    </div>
  );
}

export default Menu;
