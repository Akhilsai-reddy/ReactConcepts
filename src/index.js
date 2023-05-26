import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
// import App from './App';
// import App from './HOC/App';
// import App from './ContextApi/App';
// import App from './LiftingStateUp/App';
// import App from './Forms/App';
import App from './ShoppingCart/App';
// import App from './REDUX/App'
// import App from './REDUX/REDUX_TOOL_KIT/App';
// import App from './PROPS/App';
// import App from './LazyLoading/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
