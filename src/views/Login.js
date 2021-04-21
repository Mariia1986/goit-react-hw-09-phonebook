import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import {connect} from 'react-redux'
import operations from '../redux/auth/auth-operations'
import s from './views.module.css'

class Login extends Component {
  state = { email: "", password: "" };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state)
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={s.formContainer}>
      <Form onSubmit={this.handleSubmit} className={s.form}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className={s.formInput}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className={s.formInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={s.formButton}>
          Login
        </Button>
      </Form>
      </div>
    );
  }
}

const mapDispathToProps={
  onLogin:operations.login
}

export default connect(null, mapDispathToProps)(Login);
