import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './App';
import {Example} from './Examples';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route path="/example" component={Example} />
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
