/*HEFA*/
import React, { useState } from 'react'
import Style from "./../modules/HEFARequest.module.css"
import {
  Accordion, Button, Col, Container, FloatingLabel,
  InputGroup, Modal, OverlayTrigger, Popover, Stack, Tooltip, Row, Form
} from "react-bootstrap"
import * as Yup from 'yup'
import { Formik } from 'formik';

export function HEFARequest() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HEFA_ID_Max = 100000;
  const PASS_MIN = 8;
  const PASS_MAX = 20;
  const AMOUNT_MAX = 200;
  const AMOUNT_MIN = 10;
  var myformik;

  const validationSchema = Yup.object(
    {
      email: Yup.string().required("Email required").email("invalid email address format")
        .ensure().typeError("Only enter valid character"),
      hefaid: Yup.number().required("HEFA Id required")
        .positive("HEFA Id must be positive").max(HEFA_ID_Max, `HEFA Id can't be more than ${HEFA_ID_Max}`)
        .integer("HEFA Id must be a integer").typeError("Only Numeric Values are allowed"),
      password: Yup.string().required("Password required").min(PASS_MIN, `Password must be ${PASS_MIN} character's long`)
        .max(PASS_MAX, `Password must be less ${PASS_MAX} character's long`),
      amount: Yup.number().required("Amount is required").typeError("Amount must be number").max(AMOUNT_MAX, `What your going to do with ${AMOUNT_MAX} lakhs money ?`)
        .min(AMOUNT_MIN, "In my childhood , i had more money than you - haha")
    }
  )

  const initialValues = {
    email: "nishantharun64@gmail.com",
    hefaid: 3456,
    password: "nishanth",
    amount: 0
  }

  const onSubmit = (values) => {
    console.log(values);
  }

  // email
  // hefaid
  // password

  return (
    <div className={Style.container}>
      <br/>
      <Container>
        <Row>
          <Col lg='7'>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {
                (formik) => {
                  const { errors, handleChange, values, touched, handleBlur } = formik;
                  myformik = formik; // to use formik outside the component scope
                  return (
                    <Form>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Container fluid>
                          {/* <Row className='justify-content-md-start'> */}
                            <Row>
                              <Form.Label><h3>Email</h3></Form.Label>
                            </Row>
                            <Row>
                              <InputGroup>
                            <Col>
                            <div style={{'margin-top':'12px', 'margin-right':'10px'}}>
                                <OverlayTrigger
                                  placement='top'
                                  trigger='focus'
                                  overlay={
                                    <Tooltip>
                                      Email linked with HEFA ID
                                    </Tooltip>
                                  }>
                                  <Form.Control type="email" placeholder="enter email here" name='email' onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    isValid={!errors.email && touched.email}
                                    isInvalid={errors.email && touched.email}
                                  />
                                  {/* To DO Create Validation */}

                                </OverlayTrigger>
                                    <Form.Control.Feedback type='valid' >Valid Email</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
                                </div>
                                </Col>
                                <Col xs lg="2">
                            <div style={{'padding-top':'5px','width':'90px'}}>
                                <OverlayTrigger trigger='click'
                                  placement='right'
                                  overlay={
                                    <Popover>
                                      <Popover.Header>HEFA Email More help</Popover.Header>
                                      <Popover.Body>
                                        This email is required to validate that the authenticated user is applying for HEFA request
                                      </Popover.Body>
                                    </Popover>
                                  }>
                                  <Button>
                                    More
                                  </Button>
                                </OverlayTrigger>
                                </div>
                                </Col>
                              </InputGroup>
                            </Row>
                          {/* </Row> */}
                        </Container>
                      </Form.Group>


                      <Form.Group className="mb-3" controlId="formid">
                        <Container fluid>
                          {/* <Row className='justify-content-md-start'> */}
                            <Row>
                              <Form.Label><h3>HEFA Id</h3></Form.Label>
                            </Row>
                            <Row>
                              <InputGroup>
                              <Col>
                            <div style={{'padding-top':'0px', 'margin-right':'10px'}}>
                                <OverlayTrigger
                                  placement='top'
                                  trigger='focus'
                                  overlay={
                                    <Tooltip>
                                      HEFA Account Id
                                    </Tooltip>
                                  }>
                                  <Form.Control type="text" placeholder="enter id here" name="hefaid" onChange={handleChange}
                                    value={values.hefaid}
                                    onBlur={handleBlur}
                                    isValid={!errors.hefaid && touched.hefaid}
                                    isInvalid={errors.hefaid && touched.hefaid} />
                                </OverlayTrigger>
                                    <Form.Control.Feedback type='valid' >Valid HEFA Id</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{formik.errors.hefaid}</Form.Control.Feedback>
                                </div>
                                </Col>
                                <Col xs lg="2">
                            <div style={{'padding-top':'5px','width':'90px'}}>

                                <OverlayTrigger trigger='click'
                                  placement='right'
                                  overlay={
                                    <Popover>
                                      <Popover.Header>HEFA Account ID More Help</Popover.Header>
                                      <Popover.Body>
                                        This email is required to validate that the authenticated user is applying for HEFA request
                                      </Popover.Body>
                                    </Popover>
                                  }>
                                  <Button>
                                    More
                                  </Button>
                                </OverlayTrigger>
                                </div>
                                </Col>
                              </InputGroup>
                              </Row>
                        </Container>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formpassl">
                        <Container fluid>
                          {/* <Row className='justify-content-md-start'> */}
                            <Row>
                              <Form.Label><h3>Password</h3></Form.Label>
                            </Row>
                            <Row>
                              <InputGroup>
                              <Col>
                            <div style={{'padding-top':'0px', 'margin-right':'10px'}}>
                                <OverlayTrigger
                                  placement='top'
                                  trigger='focus'
                                  overlay={
                                    <Tooltip>
                                      HEFA Account Id Password
                                    </Tooltip>
                                  }>
                                  <Form.Control type="password" placeholder="enter password here" name="password" onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                    isValid={!errors.password && touched.password}
                                    isInvalid={errors.password && touched.password} />
                                </OverlayTrigger>
                                    <Form.Control.Feedback type='valid' >Valid Password</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
                                </div>
                                </Col>
                                <Col xs lg="2">
                            <div style={{'padding-top':'5px','width':'90px'}}>
                                <OverlayTrigger trigger='click'
                                  placement='right'
                                  overlay={
                                    <Popover>
                                      <Popover.Header>HEFA Password More help</Popover.Header>
                                      <Popover.Body>
                                        This email is required to validate that the authenticated user is applying for HEFA request
                                      </Popover.Body>
                                    </Popover>
                                  }>
                                  <Button>
                                    More
                                  </Button>
                                </OverlayTrigger>
                                </div>
                                </Col>
                              </InputGroup>
                            </Row>
                          {/* </Row> */}
                        </Container>
                      </Form.Group>

                      <Form.Group>
                        <Container fluid>
                          {/* <Row className='justify-content-md-start'> */}
                            <Row>
                              <Form.Label><h3>
                                Amount
                              </h3>
                              </Form.Label>
                            </Row>
                            <Row>
                              <InputGroup>
                              <Col>
                            <div style={{'padding-top':'0px', 'margin-right':'10px'}}>
                                <OverlayTrigger
                                  placement='top'
                                  trigger='focus'
                                  overlay={
                                    <Tooltip>
                                      Amount you request for
                                    </Tooltip>
                                  }>
                                  <Form.Control type="text" placeholder="enter amount here(in lakhs)" name="amount" onChange={handleChange}
                                    value={values.amount}
                                    onBlur={handleBlur}
                                    isValid={!errors.amount && touched.amount}
                                    isInvalid={errors.amount && touched.amount} />
                                </OverlayTrigger>
                                    <Form.Control.Feedback type='valid' >Valid Amount</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{formik.errors.amount}</Form.Control.Feedback>
                                </div>
                                </Col>
                                <Col xs lg="2">
                            <div style={{'padding-top':'5px','width':'90px'}}>
                                <OverlayTrigger trigger='click'
                                  placement='right'
                                  overlay={
                                    <Popover>
                                      <Popover.Header>Amount More help</Popover.Header>
                                      <Popover.Body>
                                        If your not able to understand , that amount denotes the amount of money  you need , better please die
                                      </Popover.Body>
                                    </Popover>
                                  }>
                                  <Button>
                                    More
                                  </Button>
                                </OverlayTrigger>
                                  </div>
                                  </Col>
                              </InputGroup>
                              </Row>
                          {/* </Row> */}
                        </Container>
                      </Form.Group>


                      {/* <Form.Group className="mb-3" controlId='formremme'>
                        <Container fluid>
                          <Row className='justify-content-md-evenly'>
                            <Col md="50">
                              <Form.Check type="checkbox" label="Remember me" style={{'':''}}/>
                            </Col>
                          </Row>
                        </Container>
                      </Form.Group> */}
                      <div style={{'margin':'20px 10px','width':'120px'}}>
                      <Button variant="primary" type="button" onClick={(event)=>{
                        if(formik.isValid){
                          handleShow();
                        }else{

                        }
                      }} >
                        Request
                      </Button>
                      </div>
                    </Form>
                  )

                }
              }
            </Formik>


          </Col>
          <Col sm='3' >
            <div className={Style.widget}>

              <Stack>
                <FloatingLabel>
                  <h3>FAQ</h3></FloatingLabel>
                <Accordion flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      What is HEFA Request ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Higher Education Financing Agency (HEFA) is a joint venture company of Canara Bank and Ministry of Education GoI. HEFA provides financial assistance for creation of educational infrastructure and R&D in India’s premier educational Institutions.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                      Who can apply for ?
                    </Accordion.Header>
                    <Accordion.Body>
                      To provide timely finance at low interest rates for capital assets creation in india’s higher education institutions and supplement it with grants by channelizing CSR funds from the corporate and donations from others.                  </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                      Range of loan provided
                    </Accordion.Header>
                    <Accordion.Body>
                      Some Range
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                       When should apply for this money
                    </Accordion.Header>
                    <Accordion.Body>
                      Anytime bro 
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>
                      Legal Regulations
                    </Accordion.Header>
                    <Accordion.Body>
                      Some regulations
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Stack>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Some Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are your sure to submit HEFA Request will following credentials
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type='submit' onClick={(_event) => {
                    onSubmit(myformik.values.email)
                  }}>Proceed</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

// main rebase 