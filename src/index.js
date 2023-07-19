import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import filterListReducer from './store/Filter'
import employeeListReducer from './store/Store'
const store=configureStore({
    reducer:{
       filterList:filterListReducer,
       employeeList:employeeListReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/Employee'>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    

);

