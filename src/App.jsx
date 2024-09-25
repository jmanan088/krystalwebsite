import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ProgramDetails from './Components/ProgramDetails/ProgramDetails';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';  // Add this import

const App = () => {
  const [playState, setPlayState] = useState(false);  // Add state to manage play

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <div className='container'>
                <Title subTitle='Our Product & Services' title='What We Offer' />
                <Programs />
                <About setPlayState={setPlayState} />  {/* Pass setPlayState to About */}
                <Title subTitle='Testimonials' title='What Our Customer Says' />
                <Testimonials />
                <Title subTitle='Contact Us' title='Get in Touch' />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} /> {/* Include VideoPlayer */}
            </div>
          }
        />
        <Route path="/program-details" element={
          <div>
          <Navbar/>
          <ProgramDetails />
          </div>
          } />
          
      </Routes>
    </Router>
  );
};

export default App;
