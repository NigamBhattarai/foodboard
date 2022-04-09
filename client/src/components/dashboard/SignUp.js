import React from 'react';
import {Form} from "react-bootstrap"
import { Link } from 'react-router-dom';
import './auth.scss';
function SignUp() {
  return (
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Form>
                <h3>Sign Up</h3>
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="First name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="Last name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className="form-control" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="form-control" placeholder="Enter password" />
                </Form.Group>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={`/signin`}>sign in?</Link>
                </p>
            </Form>
        </div>
      </div>
  );
}
export default SignUp;