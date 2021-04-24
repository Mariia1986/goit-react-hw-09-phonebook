import React, { useEffect, lazy, Suspense } from "react";
import {Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import operations from './redux/auth/auth-operations'
import {useDispatch} from 'react-redux'
import AppBar from './components/UserMenu/AppBar'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

const  Homepage= lazy(()=>import('./views/HomePage'))
const  Login = lazy(()=>import('./views/Login'))
const  Register = lazy(()=>import('./views/Register'))


const App= () =>{
 
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, []);
  
  
    return (
      <div className="App">
         <AppBar/>
        <Suspense fallback={<p className='fallback'>Загружаем...</p>}>
        <Switch>
          <PrivateRoute exact path="/" component={Homepage} redirectTo="/login"/>
          <PublicRoute restricted path="/login" redirectTo="/" component={Login}/>
          <PublicRoute restricted path="/register" redirectTo="/"  component={Register}/>
        </Switch>
        </Suspense>
      </div>
    );
  
}




export default App;
