import React, { useState } from 'react'
import Style from "./../modules/HEFARequest.module.css"
import { Accordion, Button, Dropdown, DropdownButton, Form, FormLabel, InputGroup, Modal, OverlayTrigger, Popover, Stack, Tooltip } from "react-bootstrap"

export function HEFARequest(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={Style.container}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <OverlayTrigger
              placement='bottom'
              trigger='focus'
              overlay={
                <Tooltip>
                  Email linked with HEFA ID
                </Tooltip>
              }>
              <Form.Control type="email" placeholder="enter email here" />
            </OverlayTrigger>
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
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Account ID</Form.Label>
          <InputGroup>
            <OverlayTrigger
              placement='bottom'
              trigger='focus'
              overlay={
                <Tooltip>
                  HEFA Account ID
                </Tooltip>
              }>
              <Form.Control type="text" placeholder="enter id here" />
            </OverlayTrigger>
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
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <OverlayTrigger
              placement='bottom'
              trigger='focus'
              overlay={
                <Tooltip>
                  Password for HEFA Account ID
                </Tooltip>
              }>
              <Form.Control type="password" placeholder="enter password here" />
            </OverlayTrigger>
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
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Amount
          </Form.Label>
          <OverlayTrigger
            placement='right'
            trigger='hover'
            overlay={
              <Tooltip>
                Select Loan Amount
              </Tooltip>
            }>
            <DropdownButton
              variant="secondary"
              menuVariant="dark"
              title="Amount"
              className="mt-2"
            >
              <Dropdown.Item href="#/action-1" active>1Cr</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2Cr</Dropdown.Item>
              <Dropdown.Item href="#/action-3">4Cr</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>More</Dropdown.Item>
            </DropdownButton>

          </OverlayTrigger>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleShow}>
          Request
        </Button>
      </Form>

      <Stack>
        <FormLabel>FAQ</FormLabel>
        <Accordion flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              What is HEFA Request ?
            </Accordion.Header>
            <Accordion.Body>
              Bla Bla
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              Who can apply for ?
            </Accordion.Header>
            <Accordion.Body>
              Bla Bla
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
          <Button variant="primary">Proceed</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

