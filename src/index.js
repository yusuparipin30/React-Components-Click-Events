/*Peringatan: ReactDOM.render tidak lagi didukung di React 18. Gunakan createRoot sebagai gantinya.
 Sampai Anda beralih ke API baru,aplikasi Anda akan berperilaku seolah-olah sedang menjalankan React 17.*/

 /*Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API,
  your app will behave as if it's running React 17. Learn more:*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*Untuk mengatasinya, Anda dapat kembali ke versi React sebelumnya atau memperbarui file index.js 
agar selaras dengan sintaks React 18.*/

/*To resolve it, you can either revert to a previous version of React or update your index.js file to align 
with the React 18 syntax.*/

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );