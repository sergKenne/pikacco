import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ApiProvider } from '@reduxjs/toolkit/query/react';
import './index.scss';
import App from './App';
//import { apiPosts } from './store/features/apiPosts';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);