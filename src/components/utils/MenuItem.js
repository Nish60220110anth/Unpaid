import React from 'react'

import Style from "./../modules/MenuItem.module.css"
import { NavLink } from 'react-router-dom'

export function MenuItem(props) {

  return (
    // <div className={Style.menu}>
    //   <div className={Style.menuhead}>
    //     {props.menu.menuName}
    //   </div>
    //   <div className={Style.menucontent}>
    //     {
    //       props.menu.menuContentArray.map((element, id) => {
    //         return <div className={Style.menucontentitem}>
    //           <NavLink key={element.menuContentName}
    //             to={element.locationText}>{element.menuContentName}</NavLink>
    //         </div>
    //       })
    //     }
    //   </div>
    // </div>

    <div className={Style.dropdown}>
      <button className={Style.dropbtn}>{props.menu.menuName}</button>
      <div className={Style.dropdowncontent}>
      {
          props.menu.menuContentArray.map((element, id) => {
            return <NavLink key={element.menuContentName}
                to={element.locationText}>{element.menuContentName}</NavLink>
          })
        }
      </div>
    </div>

  )
}

