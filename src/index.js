import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {DataProvider} from "./context/Data";
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DataProvider>
        <App/>
  </DataProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();

