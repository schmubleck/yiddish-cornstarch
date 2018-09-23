import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './App';
import {Example} from './Examples';

function Routes() {
  return (
    <Router>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/examples/:name" component={Example} />
      </div>
    </Router>
  );
}

export default Routes;
