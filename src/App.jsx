import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from './components/Header';
import Footer from './components/Footer';
import Menu, {FirstMenu, OtherMenu, Contact} from './components/Menu';
import {Home} from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Header/>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/firstMenu" element={<FirstMenu />} />
                    <Route path="/otherMenu" element={<OtherMenu />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
