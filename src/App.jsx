
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Portfolio from '@/pages/Portfolio';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Blade Tech - Soluciones Tecnológicas a Medida</title>
          <meta name="description" content="Automatizamos tus procesos y desarrollamos software escalable para tu empresa. Especialistas en n8n, desarrollo web, apps móviles y consultoría tecnológica." />
        </Helmet>
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
