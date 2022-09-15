import { useFormik } from 'formik';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import { Form, Button, CloseButton } from "react-bootstrap"
import Style from "./modules/LoginStudent.module.css"
import { useNavigate } from 'react-router-dom';

export function LoginStudent() {

  const formik = useFormik({
    initialValues: {
      usrname: "Nishanth",
      usrpassword: "Nish-Passw",
      remember: true
    }
  })


  const navigate = useNavigate();

  return (
    <div className={Style.loginbck}>
      <Form className={Style.logindiv}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="usrname" value={formik.values.usrname} 
          onChange={formik.handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="usrpassword" 
          onChange={formik.handleChange}  value={formik.values.usrpassword}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" name="remember" 
          onChange={formik.handleChange}  value={formik.values.remember} />
        </Form.Group>

        <div className={Style.btngroup}>
          <Button variant="dark" type="submit">
            Login
          </Button>
          <Button variant='dark' type="button">
            Forgot Password
          </Button>
        </div>
      </Form>
    </div>
  )
}



{/* <div className={Style.ripplebackground}>
<div className={`${Style.circle} ${Style.xxlarge} ${Style.shade1}`}></div>
<div className={`${Style.circle} ${Style.xlarge} ${Style.shade2}`}></div>
<div className={`${Style.circle} ${Style.large} ${Style.shade3}`}></div>
<div className={`${Style.circle} ${Style.medium} ${Style.shade4}`}></div>
<div className={`${Style.circle} ${Style.small} ${Style.shade5}`}></div>
</div> */}