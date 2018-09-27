import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';

import Registry from './ExampleRegistry';
import { Example } from './Examples';

const ExampleLinks = () => (
  <aside className="menu">
    <p className="menu-label">Examples</p>
    <ul className="menu-list">
      {Object.keys(Registry).map((name) =>
        <li key={name}><Link to={`/examples/${name}`}>{name}</Link></li>
      )}
    </ul>
  </aside>
);

const App = () => (
  <Router>
    <div className="App">

      <nav className="App-header navbar is-spaced has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <h1 className="App-title title">
                <Link to={"/"}>Yiddish Cornstarch</Link>
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-fifth">
              <ExampleLinks />
            </div>
            <div className="column">
              <Route path="/examples/:name" component={Example} />
            </div>
          </div>
        </div>
      </section>

    </div>
  </Router>
);

export default App;
