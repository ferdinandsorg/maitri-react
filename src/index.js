import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Configurator from './components/Configurator';
import Content from './components/Content';
import reportWebVitals from './reportWebVitals';
import Dragbar from './components/Dragbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Configurator />
    <Dragbar />
    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
