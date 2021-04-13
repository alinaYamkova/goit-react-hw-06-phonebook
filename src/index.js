import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react'


ReactDOM.render(
  <React.StrictMode>
    <Provider loading={null} store={store.store}>
      <PersistGate persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter> 
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

