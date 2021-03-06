import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './fonts/index.css';

import { store, history } from './store';

import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= { store }>
      <ConnectedRouter history={ history }>        
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 
