import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Home } from "./components/Home"
import { Confirmation } from "./components/Confirmation"
import { Login } from "./components/Login"
import {LoginStudent} from "./components/LoginStudent"
import {LoginFaculty} from "./components/LoginFaculty"
import { PageNotFound } from "./components/PageNotFound"
import { Profile } from "./components/Profile"

import {BalanceSheetGen} from "./components/content-components/BalanceSheetGen"
import {IncomeSheetGen} from "./components/content-components/IncomeSheetGen"
import {Budget} from "./components/content-components/Budget"

import {Ledgers} from "./components/content-components/Ledgers"
import {MISReports} from "./components/content-components/MISReports"
import {HEFARequest} from "./components/content-components/HEFARequest"
import {EMDShowCase} from "./components/content-components/EMDShowCase"
import {LetterOfCredit} from "./components/content-components/LetterOfCredit"

import {AdHocPayr} from "./components/content-components/AdHocPayr"
import {StaffPayr} from "./components/content-components/StaffPayr"
import {FacultyPayr} from "./components/content-components/FacultyPayr"

import {HostelCheckIn} from "./components/content-components/HostelCheckIn"
import {HostelCheckOut} from "./components/content-components/HostelCheckOut"
import {HostelFeeChallan} from "./components/content-components/HostelFeeChallan"
import {FeeManagement} from "./components/content-components/FeeManagement"
import {PaymentPortal} from "./components/content-components/PaymentPortal"

import {ContentHome} from "./components/content-components/ContentHome"
import {NoProfile} from "./components/NoProfile"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/home' element={<Home />}>

        <Route path='financial-reports'>
          <Route path='balance-sheet-gen' element={<BalanceSheetGen />} />
          <Route path='income-sheet-gen' element={<IncomeSheetGen />} />
          <Route path='budget' element={<Budget />} />
        </Route>

        <Route path='transaction-management'>
          <Route path='ledger' element={<Ledgers />} />
          <Route path='mis-reports' element={<MISReports />} />
          <Route path='hefa-manage' element={<HEFARequest />} />
          <Route path='letter-of-credit' element={<LetterOfCredit />} />
          <Route path='emd-showcase' element={<EMDShowCase />} />
        </Route>

        <Route path='faculty'>
          <Route path='payroll-faculty' element={<FacultyPayr />} />
          <Route path='payroll-staff' element={<StaffPayr />} />
          <Route path='payroll-adhoc' element={<AdHocPayr />} />
        </Route>

        <Route path='students-portal'>
          <Route path='hostel-feechallan' element={<HostelFeeChallan/>} />
          <Route path='hostel-checkout' element={<HostelCheckOut/>} />
          <Route path='hostel-checkin' element={<HostelCheckIn/>} />
          <Route path='payment-portal' element={<PaymentPortal/>} />
          <Route path='fee-management' element={<FeeManagement/>} />
        </Route>

        <Route index element={<ContentHome />}/>
        <Route path='content-home' element={<ContentHome/>} />
      </Route>

      <Route path='/profile' element={<NoProfile />}/>
      <Route path='/profile/:uniqueid' element={<Profile />} />

      <Route path='/confirmation/:details' element={<Confirmation />} />

      <Route path='/login' element={<Login />}>
        <Route path='student' element={<LoginStudent />}/>
        <Route path='faculty' element={<LoginFaculty />}/>
      </Route>

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
