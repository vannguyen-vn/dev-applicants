import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const Overview = () => {

  return (
    <div className="overview">
      <div className="mobile start"></div>
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOut="fadeOut"
        duration={0.7}
        delay={0}
      >
        <h1 className="slogan">
          <span>All the <span className="bold">experience</span></span>in the new credit card</h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOut="fadeOut"
        duration={1}
        delay={10}
      >
        <div className="desription">Simple transfers, payments for utilities, functional statemement,  card settings, for which you used to have to go too the brach oonline-banking</div>
        <div className="cta">
          <button className="btn order">Order a card</button>
          <div className="link">How it works</div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={2}
        delay={0} >
        <ul className="reportInfo">
          <li>Active users<span>5000+</span></li>
          <li>Download<span>30.3k</span></li>
          <li>Reviews<span>1200+</span></li>
        </ul>
      </ScrollAnimation>

    </div>
  )
}

export default Overview;