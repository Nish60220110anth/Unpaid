<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import {Button, Form} from "react-bootstrap"

export function HostelCheckIn() {
  const [dateValue, setDateValue] = useState(null);
  const [dateValueInEpoch, setDateValueInEpoch] = useState(null);
  function handleDateUpdate(e) {
    const dateValue = e.target.value;
    console.log("dateValue", dateValue);
    setDateValue(dateValue);
    const dateValueInEpoch = new Date(dateValue).getTime(); // logic to convert date to epoch format
    console.log("dateValueInEpoch", dateValueInEpoch);
    setDateValueInEpoch(dateValueInEpoch);
  }
  return (
    <div>
      <Form>
        <h1>Hostel Check In</h1>
      <Form.Group className="mb-2" controlId="namein">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="rollin">
        <Form.Label>Roll Number</Form.Label>
        <Form.Control type="text" placeholder="Enter roll number" />
        </Form.Group>
     
    <div className="mb-2">
      <span>Date : </span>
      <input type="date" onChange={(e) => handleDateUpdate(e)} />
      {dateValue ? (
        <div className="dateformats">
          <div>Date value in YYYY-MM-DD format: {dateValue}</div>
        </div>
      ) : null}
    </div>
      
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
     </div>
  )
=======
import React from "react";

import Style from "../modules/HostelCheckIn.module.css";

export function HostelCheckIn() {
	return (
		<div className="CheckIn" id="login">
			<div className="header">HostelCheckIn</div>
			<div className="Form">
				<form>
					<div>
						<label htmlFor="rollnoin">Roll No</label>
						<input
							type="text"
							required
							placeholder="Enter Roll No"
							name="rollnoin"
						/>
					</div>
					<div>
						<label htmlFor="namein">Name</label>
						<input
							type="text"
							required
							placeholder="Enter name"
							name="namein"
						/>
					</div>

					<div className="date">{/* <p> ddd {this.state.date}</p> */}</div>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
	return (
		<div className="CheckIn" id="login">
			<div className="header">HostelCheckIn</div>
			<div className="Form">
				<form>
					<div>
						<label htmlFor="rollnoin">Roll No</label>
						<input
							type="text"
							required
							placeholder="Enter Roll No"
							name="rollnoin"
						/>
					</div>
					<div>
						<label htmlFor="namein">Name</label>
						<input
							type="text"
							required
							placeholder="Enter name"
							name="namein"
						/>
					</div>

					<div className="date">{/* <p> ddd {date}</p> */}</div>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
>>>>>>> bc3282c708ace0ff32e27f4c0f1f8fd694946cb4
}

