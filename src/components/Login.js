import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Collapse, Form, Nav, Row, SplitButton } from 'react-bootstrap';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

import Style from "./modules/Login.module.css"

export function Login() {

  const navigate = useNavigate()

  function BackNavigate() {
    navigate(-1);
  }

  const [open, setOpen] = useState(false);

  return (
    <div className={Style.loginbody}>
      <div className={Style.login}>
        <div className={Style.header}>
          <h4>Login Portal</h4>
        </div>

        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link><NavLink to='student' onClick={() => setOpen(!open)} aria-expanded={open} style={({ isActive }) => ({
              background: isActive ? 'white' : 'white',
            })}>Student</NavLink></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link> <NavLink to='faculty' onClick={() => setOpen(!open)} aria-expanded={open} style={({ isActive }) => ({
              background: isActive ? 'white' : 'white',
            })}>Faculty</NavLink></Nav.Link>
          </Nav.Item>
        </Nav>

        <div className={Style.content}>
          <Collapse in={open}>
            <div id='loginportal'>
              <Outlet />
            </div>
          </Collapse>
        </div>

        <Button>Submit</Button>
        <Button onClick={BackNavigate}>Back</Button>
      </div>
    </div>
  )
}


{/* <Form>
          <Col>
              <ButtonGroup>
                <Link to='student'><Button onClick={() => setOpen(!open)}
                  aria-controls="login-portal"
                  aria-expanded={open}
                >Student</Button></Link>
                <Link to='faculty'><Button onClick={() => setOpen(!open)}
                  aria-controls="login-portal"
                  aria-expanded={open}
                >Faculty</Button></Link>
              </ButtonGroup>
            <Row>
              <Collapse in={open}>
                <div id='loginportal'>
                  <Outlet />
                </div>
              </Collapse>
            </Row>
            <Row>
              <ButtonGroup className='bg-success'>
                <Col>
                  <Row> <Button>Submit</Button> </Row>
                  <Row> <Button onClick={BackNavigate}>Back</Button> </Row>
                </Col>
              </ButtonGroup>
            </Row>
          </Col>
        </Form> */}