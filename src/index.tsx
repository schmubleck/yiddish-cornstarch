import * as ReactDOM from 'react-dom';

import Routes from './Routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  Routes(),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
