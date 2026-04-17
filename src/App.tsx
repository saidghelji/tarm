import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteRequest from './components/QuoteRequest';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <QuoteRequest />
      <Footer />
    </div>
  );
}

export default App;