import React from 'react';
import { GridRow, GridColumn } from 'emotion-flex-grid'

const Fearutes = ({ data }) => {

  const handleClick = (e) => {
    e.preventDefault()
    window.location.href = e.target.value;
  }

  const limitData = data.slice(0, 6);

  return (
    <GridRow wrap='wrap' id="listFeatures">
      {/* <GridColumn width={[12, 12, 3]}> */}
      {limitData.map((item, i) => (
        <GridColumn width={[12, 6, 4]} key={i} p={20} className="feature">
          <div className="item">
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
            <button className="btn" value={item.button.link} onClick={handleClick} aria-label="Open a new page">Learn more</button>
          </div>
        </GridColumn>
      ))}
      {/* </GridColumn> */}
    </GridRow>
  )
}

export default Fearutes;