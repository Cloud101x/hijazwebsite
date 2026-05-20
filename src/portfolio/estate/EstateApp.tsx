import { useEffect } from 'react';
import { EstateNavbar } from './components/Navbar';
import { EstateHero } from './components/sections/Hero';
import { EstateListings } from './components/sections/Listings';
import { MortgageCalculator } from './components/sections/Mortgage';
import { EstateBrokers } from './components/sections/Brokers';
import { EstateCTA } from './components/sections/CTA';
import { EstateFooter } from './components/sections/Footer';
import './styles/estate.css';

export default function EstateApp() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute('data-theme');
    root.setAttribute('data-theme', 'dark');
    return () => {
      if (previous) root.setAttribute('data-theme', previous);
    };
  }, []);

  return (
    <div className="estate-root relative min-h-screen overflow-hidden">
      <EstateNavbar />
      <main className="relative">
        <EstateHero />
        <EstateListings />
        <MortgageCalculator />
        <EstateBrokers />
        <EstateCTA />
      </main>
      <EstateFooter />
    </div>
  );
}
