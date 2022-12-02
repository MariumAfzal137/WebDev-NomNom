import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './AuthProvider';
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <BrowserRouter>
    <AuthProvider>
      <Routes> 
         <Route path = "/*" element={<App />} /> 
       </Routes>
    </AuthProvider>
  </BrowserRouter> */}
   <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode> 


);



{/* <React.StrictMode>
<BrowserRouter>
<AuthProvider>
<App />
</AuthProvider>
</BrowserRouter>
</React.StrictMode> */}