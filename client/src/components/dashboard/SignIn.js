import React from 'react';
import {Form} from 'react-bootstrap'
import './auth.scss';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Form>
                <h3>Sign In</h3>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className="form-control" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="form-control" placeholder="Enter password" />
                </Form.Group>
                <Form.Group>
                    <div className="custom-control custom-checkbox">
                        <Form.Check type="checkbox" className="custom-control-Form.Control" id="customCheck1" />
                        <Form.Label className="custom-control-Form.Label" htmlFor="customCheck1">Remember me</Form.Label>
                    </div>
                </Form.Group>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p><p className="forgot-password text-left">
                    New User <Link to={`/signup`}>Register</Link>
                </p>
            </Form>
        </div>
      </div>
  );
}
export default SignIn;