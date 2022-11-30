import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store'

import { AuthProvider } from './AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store = {store}>
    <AuthProvider>
  <App />
  </AuthProvider>
  </Provider>
  </BrowserRouter>
  </React.StrictMode> 
);

{/* <React.StrictMode>
<BrowserRouter>
<Provider store = {store}>
<App />
</Provider>
</BrowserRouter>
</React.StrictMode> */}

{/* <React.StrictMode>
<BrowserRouter>
<AuthProvider>
<App />
</AuthProvider>
</BrowserRouter>
</React.StrictMode> */}