import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth-selectors";
import HomeIcon from '@material-ui/icons/Home';
import s from "./userMenu.module.css";


const Navigation = ({ isAuthenticated }) => (
  <nav>
    {isAuthenticated && (
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        <HomeIcon fontSize="large" />
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
