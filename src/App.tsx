import React from 'react';
import './App.css';
import Header from './components/Header';
import BodyComp from './components/BodyComp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header listMenu={[]} profileDrop={[]} />
      <BodyComp/>
      <Footer footerItems={[]} GrpItems={[]}  />
    </div>
  );
} 
export default App; 