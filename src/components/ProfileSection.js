import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Style from "./modules/ProfileSection.module.css"

export function ProfileSection(props) {

  return (

    <div className={Style.profile}>

      <div id="navsidepanel" className={Style.overlay}>
        <a href="#" className={Style.closebtn} onClick={
          () => {
            document.getElementById("navsidepanel").style.width = "0%";
          }
        }>Close</a>
        <div className={Style.overlaycontent}>
          <NavLink to="/profile/Nishanth">Profile</NavLink>
          <NavLink to="/login">Login</NavLink>
          <Link to="/home">Logout</Link>
        </div>
      </div>

      <div className={Style.profileicon}>
        <button className={Style.profileopenbut} onClick={() => {
          document.getElementById("navsidepanel").style.width = "100%";
        }}>
          Profile
        </button>
      </div>

    </div>
  )
}
