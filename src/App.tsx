import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import Registry from './ExampleRegistry';
import { Example } from './Examples';

const ExampleLinks = () => (
  <div>
    <h2>Examples</h2>
    <ul>
      {Object.keys(Registry).map((name) =>
        <li key={name}><Link to={"/examples/" + name}>{name}</Link></li>
      )}
    </ul>
  </div>
);

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Yiddish Cornstarch</h1>
      </header>

      <ExampleLinks />
      <Route path="/examples/:name" component={Example} />
    </div>
  </Router>
);

export default App;
