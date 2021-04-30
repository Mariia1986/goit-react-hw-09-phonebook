import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/auth/auth-operations'
import {getUsername} from '../../redux/auth/auth-selectors'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import s from './userMenu.module.css'




const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout= ()=>dispatch(operations.logout())
  const name = useSelector(getUsername)
  
  
  return(
  <div className={s.container}>
    
    <AccountBoxIcon color="primary" fontSize="large"/>
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={s.exitButton}>
    <ExitToAppIcon color="primary" fontSize="large"/>
    </button>
  </div>
)};


export default UserMenu;