import React from 'react';
import './App.css';
import Home from './comp/Home';
import ImadProvider from './ctx/context';
function App() {

  return (
    <div className="App">
     <ImadProvider>
        <Home />
     </ImadProvider>
    </div>
  );
}

export default App;
