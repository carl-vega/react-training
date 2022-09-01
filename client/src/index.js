import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './demo/01-Stateless-Stateful/App';
// import App from './demo/01-Stateless-Stateful/App';
// import App from './demo/02-Components-Props/App';
// import App from './demo/03-Component-Children/App';
// import App from './demo/04-useState-Hook/App';
// import App from './demo/05-Dynamic-onChange/App';
// import App from './demo/06-Lists-Keys/App';
// import App from './demo/07-Lifting-State-Up/App';
// import App from './demo/08-useEffect/App';
// import App from './demo/09-useEffect/App';
// import App from './demo/10-React-Router/App';
// import App from './demo/11-State-Management/App'
// import App from './demo/12-useContext/App';
// import App from './demo/13-MUI-useTheme/App';
// import App from './demo/14-Activity-2/App';
// import App from './demo/15-Styles/App';
// import App from './demo/16-Forms/App';
import App from './demo/17-Dialogs/App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// <BrowserRouter>
// </BrowserRouter>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
