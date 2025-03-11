import React from 'react';
import './App.css';
import Header from './components/Header';
import BodyComp from './components/BodyComp';
import Footer, { footerItems, GrpItems } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header listMenu={[]} profileDrop={[]} />
      <BodyComp/>
      <Footer footerlist = {footerItems} GrpList = {GrpItems}/>
    </div>
  );
} 
export default App; 