import React from 'react'

import { Outlet } from 'react-router-dom'
import { Menubar } from './Menubar'
import { ProfileSection } from "./ProfileSection"
import { Logo } from "./Logo"

import Style from "./modules/Home.module.css"

export function Home() {

  return (
    <div className={Style.home}>

      <div className={Style.header}>

        <div className={Style.logo}>
          <Logo />
        </div>

        <div className={Style.menubar}>
          <Menubar simpleValue="Hi Krishna" />
        </div>
        
        <div className={Style.profileicon}>
          <ProfileSection />
        </div>
      </div>

      <div className={Style.contentPane}>
        <Outlet />
      </div>

    </div>
  )
}
