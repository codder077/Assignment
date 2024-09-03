import React from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-end bg-gray-900 p-8"
         style={{ 
           background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)', 
           boxShadow: '10px 10px 40px 10px #00000080'
         }}>
      <HomePage />
    </div>
  );
}

export default App;
