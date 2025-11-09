import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import OurStory from './Components/OurStory';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import Testimonials from './Components/Testimonials.jsx';
import Footer from './Components/Footer';
import './Styles/Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bni from './Components/Bni.jsx';
import OurPortfoliio from './Components/OurPortfoliio.jsx';
import ContactUs from './Components/ContactUs.jsx';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurStory />
      <Services />
      <OurPortfoliio />
      <WhyChooseUs />
      <ContactUs />
      <Testimonials />
      <Footer />
      <Bni />
    </div>
  );
}

export default App;