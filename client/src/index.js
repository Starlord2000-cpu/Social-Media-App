import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from './state'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {Provider } from "react-redux";
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {PersistGate} from "redux-persist/integration/react";

const persistConfig={key:"root",storage,version:1};
const persistReducer = persistReducer(persistconfig,authReducer);
const store= configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)
})






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);


