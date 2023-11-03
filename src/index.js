import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import './index.scss';
import App from './App';
import { postsApi } from './store/features/postsSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={postsApi}>
    <Router>
      <App />
    </Router>
  </ApiProvider>
);