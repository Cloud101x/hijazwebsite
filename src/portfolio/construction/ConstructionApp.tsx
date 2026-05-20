import { useEffect } from 'react';
import { ConstructionNavbar } from './components/Navbar';
import { ConstructionHero } from './components/sections/Hero';
import { ConstructionTicker } from './components/sections/Ticker';
import { ConstructionProjects } from './components/sections/Projects';
import { ConstructionCapabilities } from './components/sections/Capabilities';
import { ConstructionProcess } from './components/sections/Process';
import { ConstructionEquipment } from './components/sections/Equipment';
import { QuoteCTA } from './components/sections/QuoteCTA';
import { ConstructionFooter } from './components/sections/Footer';
import './styles/construction.css';

export default function ConstructionApp() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute('data-theme');
    root.setAttribute('data-theme', 'dark');
    return () => {
      if (previous) root.setAttribute('data-theme', previous);
    };
  }, []);

  return (
    <div className="construction-root relative min-h-screen overflow-hidden">
      <ConstructionNavbar />
      <main className="relative">
        <ConstructionHero />
        <ConstructionTicker />
        <ConstructionProjects />
        <ConstructionCapabilities />
        <ConstructionProcess />
        <ConstructionEquipment />
        <QuoteCTA />
      </main>
      <ConstructionFooter />
    </div>
  );
}
