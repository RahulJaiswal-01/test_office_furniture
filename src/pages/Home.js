import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Products from '../components/Products/Products';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Clients from '../components/Clients/Clients';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Products Section */}
        <section id="products">
          <Products />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Clients/Testimonials */}
        <section id="clients">
          <Clients />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;