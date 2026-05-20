import { useEffect } from 'react';
import { CommerceNavbar } from './components/Navbar';
import { CommerceHero } from './components/sections/Hero';
import { CommerceMarquee } from './components/sections/Marquee';
import { CommerceCatalog } from './components/sections/Catalog';
import { CommerceFeaturedPiece } from './components/sections/FeaturedPiece';
import { CommerceEditorial } from './components/sections/Editorial';
import { CommerceFooter } from './components/sections/Footer';
import { CartDrawer } from './components/CartDrawer';
import './styles/commerce.css';

export default function CommerceApp() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute('data-theme');
    root.setAttribute('data-theme', 'light');
    return () => {
      if (previous) root.setAttribute('data-theme', previous);
    };
  }, []);

  return (
    <div className="commerce-root relative min-h-screen overflow-hidden">
      <CommerceNavbar />
      <main className="relative">
        <CommerceHero />
        <CommerceMarquee />
        <CommerceCatalog />
        <CommerceFeaturedPiece />
        <CommerceEditorial />
      </main>
      <CommerceFooter />
      <CartDrawer />
    </div>
  );
}
