import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import './fonts/index.css';

import { store, history, persistor } from './store';

import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= { store }>
      <ConnectedRouter history={ history }>
        <PersistGate loading={ null } persistor={ persistor }>
          <App />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 
