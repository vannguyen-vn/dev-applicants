import React from 'react';


const Overview = () => {
  return (
    <div className="overview">
      <div className="mobile start"></div>
      <h1 className="slogan"><span>All the <span className="bold">experience</span></span>in the new credit card</h1>
      <div className="desription">Simple transfers, payments for utilities, functional statemement,  card settings, for which you used to have to go too the brach oonline-banking</div>
      <div className="cta">
        <button className="btn order">Order a card</button>
        <div className="link">How it works</div>
      </div>
      <ul className="reportInfo">
        <li>Active users<span>5000+</span></li>
        <li>Download<span>30.3k</span></li>
        <li>Reviews<span>1200+</span></li>
      </ul>
    </div>
  )
}

export default Overview;