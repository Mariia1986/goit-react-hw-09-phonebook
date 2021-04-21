import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import { isAuthenticated } from "../../redux/auth/auth-selectors";

import AuthNav from "./AuthNav";
import s from "./userMenu.module.css";

const AppBar = ({ isAuthenticated }) => (
  <header className={s.header}>
    <Navigation />

    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
