import React, { useState } from 'react';
import './App.scss';
import { BurgerMenu } from './components/BurgerMenu';
import { ContactUsSection } from './components/ContactUsSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header openMenu={openMenu} />
      <BurgerMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <div className="container">
        <ContactUsSection />
      </div>
      <Footer />
    </>
  );
};
