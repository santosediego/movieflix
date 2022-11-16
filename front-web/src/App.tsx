import React from 'react';
import Navbar from './components/Navbar';
import "./assets/styles/custom.scss";
import './App.css';
import Auth from './pages/Auth';

function App() {
  return (
    <>
      <Navbar />
      <Auth />
    </>
  );
}

export default App;
