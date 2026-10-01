


"use client";

import store from '../store/store';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer position="top-right" autoClose={2500} />
    </Provider>
  );
}
