import React, { useState, useEffect } from 'react';

import "./App.css";
import Header from "./components/Header";
import OverView from "./components/Overview";
import Card from "./components/Card";
import Fearutes from "./components/Features";

import { getLCP, getFID, getCLS } from "web-vitals";
import { GridRow, GridColumn } from "emotion-flex-grid";
import axios from 'axios';
import PropTypes from 'prop-types';


if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf')
      .then((response) => setData(response.data))
      .catch(err => console.log('Error fetching data', err));
  }, []);

  return (
    <div className="App" role="main">
      <section id="overView" className="bgOverview">
        <GridRow wrap={['wrap', 'nowrap']} >
          <GridColumn offset={[0, 1]} width={[12, 12, 6]} >
            <Header />
            <OverView />
          </GridColumn>
          <GridColumn width={[12, 6]}>
            <Card />
          </GridColumn>
        </GridRow>
      </section>
      <section id="features">
        <GridRow justify='center'>
          <GridColumn width={10} >
            <h1>Experience The Cardo</h1>
            <Fearutes data={data} />
          </GridColumn>
        </GridRow>
      </section>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.array
}

export default App;
