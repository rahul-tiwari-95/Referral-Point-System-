import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <navbar>
          <p>
            Navbar goes here
          </p>
          <p>
            Options like Create , Login (Login is for admin access)
          </p>
        </navbar>
        
        <search>
          <p>
            Search Bar with Buttons.  Search goes here
            Search via Phone number
          </p>
        </search>
        <results>
          <p>
            Shows content of the Search results
          </p>
        </results>

    </div>
  );
}

export default App;
