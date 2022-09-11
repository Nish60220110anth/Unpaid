import { useFormik } from 'formik';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import { Form, Button, CloseButton } from "react-bootstrap"
import Style from "./modules/LoginStudent.module.css"
import { useNavigate } from 'react-router-dom';

export function LoginStudent() {

  const formikHandler = useFormik({
    initialValues: {
      usrname: "Nishanth",
      usrpassword: "Nish-Passw",
      remember: true
    }
  })

  const navigate = useNavigate();

  return (
    <div className={Style.loginbck}>
      <div className={Style.ripplebackground}>
        <div className={`${Style.circle} ${Style.xxlarge} ${Style.shade1}`}></div>
        <div className={`${Style.circle} ${Style.xlarge} ${Style.shade2}`}></div>
        <div className={`${Style.circle} ${Style.large} ${Style.shade3}`}></div>
        <div className={`${Style.circle} ${Style.medium} ${Style.shade4}`}></div>
        <div className={`${Style.circle} ${Style.small} ${Style.shade5}`}></div>
      </div>

      <Form className={Style.logindiv}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <div className={Style.btngroup}>
          <Button variant="dark" type="submit">
            Login
          </Button>
          <Button variant='dark' type="button">
            Forgot Password
          </Button>
        </div>
        <div className={Style.closeBut}>
          <CloseButton variant="white" className={Style.closebut} onClick={()=>{
            navigate(-2);
          }}/>
        </div>
      </Form>
    </div>
  )
}
