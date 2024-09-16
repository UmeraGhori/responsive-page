import React from 'react';
import './Navbar.css';
import './Background.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <section className="main-section">
        <div className="content-section">
          <h1>Welcome to Our Page</h1>
          <p>This page has a fully dark grey background and a transparent navbar.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
