import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import { store } from "./store/store";


function App() {

  const navigate = useNavigate();



  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App;
