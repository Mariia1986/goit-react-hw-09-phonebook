import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useDispatch } from "react-redux";
import operations from "../redux/auth/auth-operations";
import s from "./views.module.css";

const Register = ({ register }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
      case "name":
        setName(value);
        return;
      default:
        console.log("Something wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className={s.formContainer}>
      <Form onSubmit={handleSubmit} className={s.form}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
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
            onChange={handleChange}
            className={s.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={handleChange}
            className={s.formInput}
          />
        </Form.Group>
        <Button variant="primary" className={s.formButton} type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};



export default Register;
