import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

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
	);
}
