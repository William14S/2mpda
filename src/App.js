import React from 'react';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashobard';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Dashboard/>
     <div className="card-container">
         <Card category = 'Food' title = 'Pizza'/>
         <Card category = 'Movie' title = 'Final Destination'/>
         <Card category = 'Activity' title = 'Existing'/>
         <Card category = 'Video Game' title = 'GTA or COD'/>
     </div>
    </div>
  );
}

export default App;
