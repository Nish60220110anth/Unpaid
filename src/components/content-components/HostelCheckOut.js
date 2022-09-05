import React, { useState, useEffect } from "react"
import {Button, Form} from "react-bootstrap"
   

export function HostelCheckOut() {
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
        <h1>Hostel Check Out</h1>
      <Form.Group className="mb-3" controlId="nameout">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="rollout">
        <Form.Label>Roll Number</Form.Label>
        <Form.Control type="text" placeholder="Enter roll number" />
        </Form.Group>
     
    <div className="mb-3">
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
}
// import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Style from "../modules/HostelCheckOut.module.css";

// export function HostelCheckOut() {
//   return (
//     <div className="container">
//       <form>
//         <h1>Hostel Check Out</h1>
//         <div className="checkout">
//           <div className="field">
//             <label>Enter your Name</label>
//             <input type= "text" name="nameout" placeholder="Enter your name"></input>
//           </div>
//           <div className="field">
//             <label>Enter your Roll Number</label>
//             <input type= "text" name="rollout" placeholder="Enter your roll number"></input>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

