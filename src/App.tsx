import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import RepoComponent from './components/entity/RepoComponent';

function App() {
  return (
    <>
      <Navbar />
      <RepoComponent />
    </>
  );
}

export default App;
