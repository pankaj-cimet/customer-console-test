import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


if(!document.getElementById('CustomerConsole-container')){
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
declare global {
  interface Window {
    renderCustomerConsole: (containerId: string) => void;
  }
}

let rootCustomerConsole: any;
window.renderCustomerConsole = (containerId:string,...rest) => {
  console.log("🚀 ~ file: index.tsx:26 ~ rest:", rest)
  let element:HTMLElement = document.getElementById(containerId) as HTMLElement
  rootCustomerConsole= ReactDOM.createRoot(element);
  rootCustomerConsole
  .render(<React.StrictMode>
  <App rest={rest} />
</React.StrictMode>
);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
