import React, { Component, lazy, Suspense } from "react";
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import operations from './redux/auth/auth-operations'
import {connect} from 'react-redux'
import AppBar from './components/UserMenu/AppBar'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

const  Homepage= lazy(()=>import('./views/HomePage'))
const  Login = lazy(()=>import('./views/Login'))
const  Register = lazy(()=>import('./views/Register'))


class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }
  render() {
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
}

const mapDispatchToProps={
getCurrentUser:operations.getCurrentUser
}


export default connect(null,mapDispatchToProps)(App);
