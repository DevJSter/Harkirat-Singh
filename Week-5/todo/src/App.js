import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import Signup from './Signup';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="Signup" element={<Signup />}/>
        <Route path="SignIn" element={<SignIn />}/>
        <Route />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
