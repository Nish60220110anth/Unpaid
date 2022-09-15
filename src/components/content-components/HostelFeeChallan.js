import React from "react";
import { Button, Form } from "react-bootstrap";

export function HostelFeeChallan() {
	return (
		<div>
			<Form>
				<h1>CHALLAN</h1>
				<Form.Group className="mb-1" controlId="namech">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter name" />
				</Form.Group>
				<Form.Group className="mb-1" controlId="rollch">
					<Form.Label>Roll Number</Form.Label>
					<Form.Control type="text" placeholder="Enter roll number" />
				</Form.Group>
				<Form.Group className="mb-1" controlId="depch">
					<Form.Label>Department</Form.Label>
					<Form.Control type="text" placeholder="Enter department" />
				</Form.Group>
				<Form.Group className="mb-1" controlId="amountch">
					<Form.Label>Amount to be paid</Form.Label>
					<Form.Control type="text" placeholder="Enter the amount to be paid" />
				</Form.Group>

				<Button variant="dark" type="submit">
					Create challan
				</Button>
			</Form>
		</div>
	);
}
