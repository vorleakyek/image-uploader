import React from 'react';
import logo from './logo.svg';
import './App.css';

import coverImage from './img/cover.jpg';


function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="background">
            <img className="background-img" src={coverImage} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
