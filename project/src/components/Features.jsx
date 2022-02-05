import React from 'react';
import { GridRow, GridColumn } from 'emotion-flex-grid'
import ScrollAnimation from "react-animate-on-scroll";

const Fearutes = ({ data }) => {

  const handleClick = (e) => {
    e.preventDefault()
    window.location.href = e.target.value;
  }

  const limitData = data.slice(0, 6);

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeOut"
      duration={1}
      delay={0}
    >
      <GridRow wrap='wrap' id="listFeatures">
        {limitData.map((item, i) => (
          <GridColumn width={[12, 6, 4]} key={i} p={20} className="feature">
            <div className="item">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <button className="btn" value={item.button.link} onClick={handleClick} aria-label="Open a new page">Learn more</button>
            </div>
          </GridColumn>
        ))}
      </GridRow>

    </ScrollAnimation>
  )
}

export default Fearutes;