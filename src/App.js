import React from 'react';
import Header from './components/Header';
import BodyNav from './components/BodyNav';
import Footer from './components/Footer'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Header />
      <BodyNav />
      <Footer />
    </Router>
  );
}

export default App;
