import React from 'react';
import Navbar from './components/Navbar';
import "./assets/styles/custom.scss";
import './App.css';
import Auth from './pages/Auth';
import Listing from './pages/Listing';

function App() {
  return (
    <>
      <Navbar />
      <Listing />
    </>
  );
}

export default App;
