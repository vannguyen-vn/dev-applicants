import React, { useState } from 'react';
import { GridRow, GridColumn } from 'emotion-flex-grid'

import logo from "../images/logo.svg";

const Header = () => {
  const [isActive, setActive] = useState("false");
  const menuList = ["Deposit", "Dashboard", "Company", "Pricing"];

  const handleToggle = () => {
    setActive(!isActive);
  }


  return (
    <header>
      <GridRow>
        <GridColumn width={2}>
          <div className="logo"><img src={logo} alt="Logo" /></div>
        </GridColumn>
        <GridColumn width={10} className={isActive ? "navigator" : "navigator open"} >
          <div id="nav" onClick={handleToggle} className="tablet">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="menu">
            {menuList.map((menu, i) => <li key={i}>{menu}</li>)}
          </ul>
        </GridColumn>
      </GridRow>
    </header>
  )
}

export default Header;