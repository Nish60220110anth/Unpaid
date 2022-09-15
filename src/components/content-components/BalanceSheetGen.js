import { useFormik } from "formik";
import React, { useState } from "react";

import Style from "../modules/BalanceSheetGen.module.css";

export function BalanceSheetGen() {
	const formik = useFormik({
		initialValues: {
			sc20: 0.0,
			sc19: 0.0,
			ta20: 0.0,
			ta19: 0.0,
			tsc20_lia201: 0.0,
			tsc19: 0.0,
			ia20: 0.0,
			ia19: 0.0,
			rf20: 0.0,
			rf19: 0.0,
			cwip19: 0.0,
			cwip20: 0.0,
			trf20_lia201: 0.0,
			trf19: 0.0,
			oa20: 0.0,
			oa19: 0.0,
			tsf19: 0.0,
			tsf20: 0.0,
			fa19: 0.0,
			fa20: 0.0,
			nci19: 0.0,
			nci20: 0.0,
			ltb19: 0.0,
			ltb20: 0.0,
			dta19: 0.0,
			dta20: 0.0,
			dtl19: 0.0,
			dtl20: 0.0,
			ltlaa19: 0.0,
			ltlaa20: 0.0,
			otll19: 0.0,
			otll20: 0.0,
			onca19: 0.0,
			onca20: 0.0,
			ltp19: 0.0,
			ltp20: 0.0,
			tnca19: 0.0,
			tnca20: 0.0,
			tncl19: 0.0,
			tncl20: 0.0,
			stb19: 0.0,
			stb20: 0.0,
			ci19: 0.0,
			ci20: 0.0,
			tp19: 0.0,
			tp20: 0.0,
			i19: 0.0,
			i20: 0.0,
			ocl19: 0.0,
			ocl20: 0.0,
			tr19: 0.0,
			tr20: 0.0,
			stp19: 0.0,
			stp20: 0.0,
			cace19: 0.0,
			cace20: 0.0,
			tcl19: 0.0,
			tcl20: 0.0,
			stlaa19: 0.0,
			stlaa20: 0.0,
			tcal19: 0.0,
			tcal20: 0.0,
			tca19: 0.0,
			tca20: 0.0,
			oca19: 0.0,
			oca20: 0.0,
			ta19: 0.0,
			ta20: 0.0,
			diff: 0.0,
		},
	});

	return (
		<div>
			<div>
				{
					<head>
						<meta
							http-equiv="Content-Type"
							content="text/html; charset=utf-8"
						/>
						<link
							type="text/css"
							rel="stylesheet"
							href="../modules/BalanceSheetGen.module.css"
						/>
						<style type="text/css"></style>
					</head>
				}
				<body>
					<div className="ritz grid-container" dir="ltr">
						<table
							className={Style.ritz.waffle}
							cellspacing="2"
							cellpadding="5 "
						>
							<thead>
								<tr>
									<th className="row-header freezebar-origin-ltr"></th>
									<th
										id="126933298C0"
										className={Style.columnheadersbackground}
									></th>
									<th
										id="126933298C1"
										//style="width:100px;"
										className={Style.columnheadersbackground}
									></th>
									<th
										id="126933298C2"
										//style="width:100px;"
										className={Style.columnheadersbackground}
									></th>
									<th
										id="126933298C3"
										//style="width:36px;"
										className={Style.columnheadersbackground}
									></th>
									<th
										id="126933298C4"
										//style="width:253px;"
										className={Style.columnheadersbackground}
									></th>
									<th
										id="126933298C5"
										//style="width:100px;"
										className={Style.columnheadersbackground}
									></th>
									<th
										id="126933298C6"
										//style="width:100px;"
										className={Style.columnheadersbackground}
									></th>
								</tr>
							</thead>
							<tbody>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R0"
										////style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											1
										</div>
									</th>
									<td></td>
									<td className="s0" dir="ltr" colspan="4">
										Balance sheet (in Cr.)
									</td>
									<td className="s1" dir="ltr"></td>
									<td className="s1" dir="ltr"></td>
									<td className="s1" dir="ltr"></td>
									<td className="s1" dir="ltr"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R1"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											2
										</div>
									</th>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R2"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											3
										</div>
									</th>
									<td className="s2" dir="ltr">
										EQUITIES AND LIABILITIES
									</td>
									<td className="s3" dir="ltr">
										2022
									</td>
									<td className="s3" dir="ltr">
										2021
									</td>
									<td></td>
									<td className="s2" dir="ltr">
										ASSETS
									</td>
									<td className="s3" dir="ltr">
										2022
									</td>
									<td className="s3" dir="ltr">
										2021
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R3"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											4
										</div>
									</th>
									<td className="s4" dir="ltr">
										SHAREHOLDER&#39;S FUNDS
									</td>
									<td className="s4"></td>
									<td className="s4"></td>
									<td></td>
									<td className="s4" dir="ltr">
										NON-CURRENT ASSETS
									</td>
									<td className="s4"></td>
									<td className="s4"></td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R4"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											5
										</div>
									</th>
									<td className="s1" dir="ltr">
										Equity Share Capital
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="sc20"
											name="sc20"
											value={formik.values.sc20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="sc19"
											name="sc19"
											value={formik.values.sc19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Tangible Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ta20"
											name="ta20"
											value={formik.values.ta20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ta19"
											name="ta19"
											value={formik.values.ta19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R5"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											6
										</div>
									</th>
									<td className="s1" dir="ltr">
										Total Share Capital
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tsc20_lia201"
											name="tsc20_lia201"
											value={formik.values.tsc20_lia201}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tsc19"
											name="tsc19"
											value={formik.values.tsc19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Intangible Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ia20"
											name="ia20"
											value={formik.values.tsc20_ia20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ia19"
											name="1a19"
											value={formik.values.ia19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R6"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											7
										</div>
									</th>
									<td className="s1" dir="ltr">
										Reserves and Surplus
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="rf20"
											name="rf20"
											value={formik.values.rf20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input type="number" step="0.01" className="rf19" />
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Capital Work-In-Progress
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="cwip20"
											name="cwip20"
											value={formik.values.cwip20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="cwip19"
											name="cwip19"
											value={formik.values.cwip19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R7"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											8
										</div>
									</th>
									<td className="s1" dir="ltr">
										Total Reserves and Surplus
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="trf20_lia201"
											name="trf20_lia201"
											value={formik.values.trf20_lia201}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="trf19"
											name="trf19"
											value={formik.values.trf19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Other Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="oa20"
											name="oa20"
											value={formik.values.oa20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="oa19"
											name="oa19"
											value={formik.values.oa19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R8"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											9
										</div>
									</th>
									<td className="s1" dir="ltr">
										Total Shareholders Funds
									</td>
									<td className="s5 form-group" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tsf20"
											id="liasum201"
											name="tsf20"
											value={formik.values.tsf20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tsf19"
											id="liasum191"
											name="tsf19"
											value={formik.values.tsf19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Fixed Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="fa20"
											id="asssum201"
											name="fa20"
											value={formik.values.fa20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="fa19"
											id="asssum191"
											name="fa19"
											value={formik.values.fa19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R9"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											10
										</div>
									</th>
									<td className="s4" dir="ltr">
										NON-CURRENT LIABILITIES
									</td>
									<td className="s4"></td>
									<td></td>
									<td></td>
									<td className="s1" dir="ltr">
										Non-Current Investments
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="nci20"
											name="nci20"
											value={formik.values.nci20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="nci19"
											name="nci19"
											value={formik.values.nci19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R10"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											11
										</div>
									</th>
									<td className="s1" dir="ltr">
										Long Term Borrowings
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ltb20"
											name="ltb20"
											value={formik.values.ltb20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ltb19"
											name="ltb19"
											value={formik.values.ltb19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Deferred Tax Assets [Net]
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="dta20"
											name="dta20"
											value={formik.values.dta20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="dta19"
											name="dta19"
											value={formik.values.dta19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R11"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											12
										</div>
									</th>
									<td className="s1" dir="ltr">
										Deferred Tax Liabilities [Net]
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="dtl20"
											name="dtl20"
											value={formik.values.dtl20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="dtl19"
											name="dtl19"
											value={formik.values.dtl19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Long Term Loans And Advances
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="ltlaa20"
											name="ltlaa20"
											value={formik.values.ltlaa20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="ltlaa19"
											name="ltlaa19"
											value={formik.values.ltlaa19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R12"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											13
										</div>
									</th>
									<td className="s1" dir="ltr">
										Other Long Term Liabilities
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="otll20"
											name="otll20"
											value={formik.values.otll20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="otll19"
											name="otll19"
											value={formik.values.otll19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Other Non-Current Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="onca20"
											name="onca20"
											value={formik.values.onca20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="onca19"
											name="onca19"
											value={formik.values.onca19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R13"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											14
										</div>
									</th>
									<td className="s1" dir="ltr">
										Long Term Provisions
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ltp20"
											name="ltp20"
											value={formik.values.ltp20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ltp19"
											name="ltp19"
											value={formik.values.ltp19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Total Non-Current Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="tnca20"
											name="tnca20"
											value={formik.values.tnca20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="tnca19"
											name="tnca19"
											value={formik.values.tnca19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R14"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											15
										</div>
									</th>
									<td className="s1" dir="ltr">
										Total Non-Current Liabilities
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tncl20"
											name="tncl20"
											value={formik.values.tncl20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tncl19"
											name="tncl19"
											value={formik.values.tncl19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr"></td>
									<td className="s1"></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R15"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											16
										</div>
									</th>
									<td className="s4" dir="ltr">
										CURRENT LIABILITIES
									</td>
									<td className="s4"></td>
									<td></td>
									<td></td>
									<td className="s4" dir="ltr">
										CURRENT ASSETS
									</td>
									<td className="s4"></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R16"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											17
										</div>
									</th>
									<td className="s1" dir="ltr">
										Short Term Borrowings
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="stb20"
											name="stb20"
											value={formik.values.stb20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="stb19"
											name="stb19"
											value={formik.values.stb19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Current Investments
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="ci20"
											name="ci20"
											value={formik.values.ci20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="ci19"
											name="ci19"
											value={formik.values.ci19}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s1" dir="ltr"></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R17"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											18
										</div>
									</th>
									<td className="s1" dir="ltr">
										Trade Payables
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tp20"
											name="tp20"
											value={formik.values.tp20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tp19"
											name="tp19"
											value={formik.values.tp19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Inventories
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="i20"
											name="i20"
											value={formik.values.i20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="i19"
											name="i19"
											value={formik.values.i19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R18"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											19
										</div>
									</th>
									<td className="s1" dir="ltr">
										Other Current Liabilities
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ocl20"
											name="ocl20"
											value={formik.values.ocl20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="ocl19"
											name="ocl19"
											value={formik.values.ocl19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Trade Receivables
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tr20"
											name="tr20"
											value={formik.values.tr20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tr19"
											name="tr19"
											value={formik.values.tr19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R19"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											20
										</div>
									</th>
									<td className="s1" dir="ltr">
										Short Term Provisions
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="stp20"
											name="stp20"
											value={formik.values.stp20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="stp19"
											name="stp19"
											value={formik.values.stp19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Cash And Cash Equivalents
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="cace20"
											name="cace20"
											value={formik.values.cace20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="cace19"
											name="cace19"
											value={formik.values.cace19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R20"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											21
										</div>
									</th>
									<td className="s1" dir="ltr">
										Total Current Liabilities
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tcl20"
											name="tcl20"
											value={formik.values.tcl20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tcl19"
											name="tcl19"
											value={formik.values.tcl19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										Short Term Loans And Advances
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="stlaa20"
											name="stlaa20"
											value={formik.values.stlaa20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="stlaa19"
											name="stlaa19"
											value={formik.values.stlaa19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R21"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											22
										</div>
									</th>
									<td className="s6" dir="ltr">
										Total Capital And Liabilities
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tcal20"
											name="tcal20"
											value={formik.values.tcal20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											step="0.01"
											className="tcal19"
											name="tcal19"
											value={formik.values.tcal19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr">
										OtherCurrentAssets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="oca20"
											name="oca20"
											value={formik.values.oca20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="oca19"
											name="oca19"
											value={formik.values.oca19}
											onChange={formik.handleChange}
										/>
									</td>
									<td></td>
									<td className="s1" dir="ltr"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R22"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											23
										</div>
									</th>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className="s1" dir="ltr">
										Total Current Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="tca20"
											name="tca20"
											value={formik.values.tca20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="tca19"
											name="tca19"
											value={formik.values.tca19}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s1" dir="ltr"></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R23"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											24
										</div>
									</th>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className="s6" dir="ltr">
										Total Assets
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="ta20"
											name="ta20"
											value={formik.values.ta20}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s5" dir="ltr">
										<input
											type="number"
											className="ta19"
											name="ta19"
											value={formik.values.ta19}
											onChange={formik.handleChange}
										/>
									</td>
									<td className="s1" dir="ltr"></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R24"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											25
										</div>
									</th>
									<td className="s1" dir="ltr"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className="s1"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R25"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											26
										</div>
									</th>
									<td className="s1" dir="ltr"></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R26"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											27
										</div>
									</th>
									<td className="s1"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className="s1"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R27"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											28
										</div>
									</th>
									<td className="s1"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className="s1"></td>
								</tr>
								<tr>
									<th
										id="126933298R48"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											49
										</div>
									</th>
									<td className="s1"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className="s1"></td>
								</tr>
								<tr /*style="height: 20px"*/>
									<th
										id="126933298R49"
										//style="height: 20px;"
										className="row-headers-background"
									>
										<div
											className="row-header-wrapper" /*style="line-height: 20px"*/
										>
											50
										</div>
									</th>
									<td className="s1"></td>
									<td className="s1"></td>
									<td className="s1"></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className="s1"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</body>
				<>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
					<script type="text/javascript" src="script.js"></script>
				</>
			</div>
		</div>
	);
}
