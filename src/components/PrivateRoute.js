import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  {isAuthenticated} from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute =({
  component: Component,
  
  redirectTo,
  ...routeProps
}) =>{
  
 const  isAuth=  useSelector(isAuthenticated)
  
  return (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
)};



export default PrivateRoute;