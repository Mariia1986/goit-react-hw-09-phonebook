import React from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/auth/auth-operations'
import {getUsername} from '../../redux/auth/auth-selectors'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import s from './userMenu.module.css'




const UserMenu = ({ name, onLogout }) => (
  <div className={s.container}>
    
    <AccountBoxIcon color="primary" fontSize="large"/>
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={s.exitButton}>
    <ExitToAppIcon color="primary" fontSize="large"/>
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: getUsername(state),

});

const mapDispatchToProps = {
  onLogout: operations.logout,
};

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu);