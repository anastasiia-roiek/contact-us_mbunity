import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        Hello!
      </div>
      <Footer />
    </>
  );
};
