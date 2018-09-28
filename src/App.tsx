import React from 'react';
import { HashRouter as Router, Link, Route, RouteComponentProps, Switch } from 'react-router-dom';

import 'bulma/css/bulma.css';

import Registry from './ExampleRegistry';
import { Example } from './Examples';
import Generic404 from './Generic404';
import Welcome from './Welcome';

function ExampleLinksItem(name: string) {
  const path = `/examples/${name}`;
  const item = (props: RouteComponentProps<{}>) => (
    <li>
      <Link to={path} className={props.match ? "is-active" : ""}>
        {name}
      </Link>
    </li>
  );
  return <Route key={name} exact={true} path={path} children={item} />;
}

const ExampleLinks = () => (
  <aside className="menu">
    <p className="menu-label">Examples</p>
    <ul className="menu-list">
      {Object.keys(Registry).map(ExampleLinksItem)}
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
              <Switch>
                <Route exact={true} path="/" component={Welcome} />
                <Route path="/examples/:name" component={Example} />
                <Route component={Generic404} />
              </Switch>
            </div>
          </div>
        </div>
      </section>

    </div>
  </Router>
);

export default App;
