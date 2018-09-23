/* tslint:disable:max-classes-per-file */
// TODO(zhyty): reenable max-classes-per-file once we're past playing around.
import * as React from 'react';
import { Link } from 'react-router-dom';

import Registry from './ExampleRegistry';

function ExampleLinks() {
  const examples = Object.keys(Registry)
    .map((name) => (<li key={name}><Link to={"/examples/" + name}>{name}</Link></li>));

  return (
    <div>
      <h2>Examples</h2>
      <ul>{examples}</ul>
    </div>
  );
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yiddish Cornstarch</h1>
        </header>
        <ExampleLinks />
      </div>
    );
  }
}

export default App;
