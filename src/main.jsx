import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);
