import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import { isAuthenticated } from "../../redux/auth/auth-selectors";

import AuthNav from "./AuthNav";
import s from "./userMenu.module.css";

const AppBar = () => {
  const isAuth=  useSelector(isAuthenticated)
  
 return (
 
  <header className={s.header}>
    <Navigation />

    {isAuth ? <UserMenu /> : <AuthNav />}
  </header>
)};



export default AppBar;
