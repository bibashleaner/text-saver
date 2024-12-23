import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from './components/Header';
import Footer from './components/Footer';
import Menu, {FirstMenu, OtherMenu, Contact} from './components/Menu';
import {Home} from './components/Home';
import About from './components/About';
import SignaturePad from './components/SignatureBox';
import Textbox from './components/textbox';

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
                    <Route path="/textpath" element={<Textbox />} />
                    <Route path="/sigpath" element={<SignaturePad />} />

                </Routes>
            </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
