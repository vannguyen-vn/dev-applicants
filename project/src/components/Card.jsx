import React from "react";
import cardPic from "../images/card.jpg";
import mcardPic from "../images/card-m.png";

const Card = () => {
  return (
    <>
      <div id="card" className="desktop"><img src={cardPic} className="img" alt="" /></div>
      <div id="mcard" className="mobile"><img src={mcardPic} className="img" alt="" /></div>
    </>
  )
}

export default Card;