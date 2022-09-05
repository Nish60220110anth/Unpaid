import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import Style from "./../modules/LetterOfCredit.module.css";

export function LetterOfCredit() {
	return (
		<div className={Style.forSection}>
			<section>
				<div className={Style.register}>
					<div className={Style.forHead}>
						<h1>Letter Of Credit</h1>
						<span>Add details and create a LOC</span>
					</div>
					<div className={Style.col1}>
						{/* <h2>Letter Of Credit</h2> */}
						<form>
							<div>
								<label htmlFor="Reciepient">Recipient Name</label>
								<input
									type="text"
									required
									placeholder="Enter Recipient name"
									name="recipient"
								/>
							</div>
						</form>
						{/* <h2>Letter Of Credit</h2> */}
						{/* <span>Add details and create a LOC</span> */}
						<form>
							<div>
								<label htmlFor="bankName">Bank Name</label>
								<input
									type="text"
									required
									placeholder="Enter Bank name"
									name="bank"
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="enterAddress">Address</label>
								<input
									type="text"
									required
									placeholder="Enter Address"
									name="address"
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="Amount">Amount</label>
								<input
									type="text"
									required
									placeholder="Enter Amount"
									name="amount"
								/>
							</div>
						</form>
						{/* <span>Add details and create a LOC</span> */}
						<form>
							<div>
								<label htmlFor="Date">Date</label>
								<input
									type="text"
									required
									placeholder="Enter Date"
									name="date"
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="validity">Validity Date</label>
								<input
									type="text"
									required
									placeholder="Enter Valid till date"
									name="valid"
								/>
							</div>
						</form>
					</div>
					<div className="col-2">
						{/* <h2>Letter Of Credit</h2> */}
						{/* <span>Add details and create a LOC</span> */}
						<br></br>
					</div>
				</div>
				<div className="btn">
					<button type="submit">Generate</button>
				</div>
			</section>
		</div>
	);
}
