import React from "react";
import Person1 from "./../assets/img_avatar.png";

import Style from "./../modules/ContentHome.module.css";

export function ContentHome() {
  return (
    <div>
      <div className={Style.container}>
        <div className="profile">
          <img src={Person1} alt="Avatar" className={Style.image} />
          <div className={Style.overlay1}>Nishanth</div>
        </div>
      </div>

      <div className={Style.container}>
        <img src={Person1} alt="Avatar" className={Style.image} />
        <div className={Style.overlay2}>Devansh</div>
      </div>

      <div className={Style.container}>
        <img src={Person1} alt="Avatar" className={Style.image} />
        <div className={Style.overlay3}>Saranya</div>
      </div>

      <div className={Style.container}>
        <img src={Person1} alt="Avatar" className={Style.image} />
        <div className={Style.overlay4}>Siddanth</div>
      </div>

      <div className={Style.container}>
        <img src={Person1} alt="Avatar" className={Style.image} />
        <div className={Style.overlay5}>Lithesh</div>
      </div>
    </div>
  );
}
