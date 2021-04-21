import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import s from './Loader.module.css'


 class Spinner extends Component {
  //other logic
  render() {
    return (
        <div className={s.container}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        className={s.loader}
      />
      </div>
    );
  }
}
export default Spinner