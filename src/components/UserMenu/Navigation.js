import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth-selectors";
import HomeIcon from '@material-ui/icons/Home';
import s from "./userMenu.module.css";


const Navigation = () => {
  
  const isAuth=useSelector(isAuthenticated)
  
  
 return (
  <nav>
    {isAuth && (
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        <HomeIcon fontSize="large" />
      </NavLink>
    )}
  </nav>
)};



export default Navigation;
