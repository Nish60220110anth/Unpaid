import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import Style from "./modules/Login.module.scss"

export function Login() {

  const navigate = useNavigate()

  function BackNavigate() {
    navigate(-1);
  }

  return (
    <div className={Style.loginbody}>
      <div className={Style.login}>

        <div className={Style.header}>
          <h4>Header</h4>
        </div>

        <div className={Style.content}>
          <div className={Style.contentbut}>
            <Link to="/login/student" className={Style.link} onClick={() => {
              if (document.getElementById('loginoutlet').style.display == 'none') {
                document.getElementById('loginoutlet').style.display = 'block';
              } else {
                document.getElementById('loginoutlet').style.display = 'none';
              }
            }}>Student</Link>
          </div>
          <div className={Style.contentbut}>
            <Link to="/login/faculty" className={Style.link} onClick={() => {
              if (document.getElementById('loginoutlet').style.display == 'none') {
                document.getElementById('loginoutlet').style.display = 'block';
              } else {
                document.getElementById('loginoutlet').style.display = 'none';
              }
            }}>Faculty</Link>
          </div>
        </div>


        <div className={Style.outlet} id='loginoutlet'>
          <div className={Style.modalcontent}>
            <Outlet />
          </div>
        </div>


        <div className={Style.backdiv}>
          <button onClick={BackNavigate} className={Style.backbut}>Back</button>
        </div>
      </div>

    </div>
  )
}
