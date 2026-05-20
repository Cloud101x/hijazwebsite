import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArcadeNavbar } from './components/Navbar';
import { ArcadeHero } from './components/sections/Hero';
import { ArcadeMarquee } from './components/sections/Marquee';
import { ArcadeMenu } from './components/sections/Menu';
import { ArcadeGames } from './components/sections/Games';
import { ArcadeEvents } from './components/sections/Events';
import { ArcadeGallery } from './components/sections/Gallery';
import { ArcadeTestimonialsSection } from './components/sections/Testimonials';
import { ArcadeCTA } from './components/sections/CTA';
import { ArcadeFooter } from './components/sections/Footer';
import { ReservationDrawer } from './components/ReservationDrawer';
import './styles/arcade.css';

gsap.registerPlugin(ScrollTrigger);

export default function ArcadeApp() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute('data-theme');
    root.setAttribute('data-theme', 'dark');

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('[data-arcade-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.07 },
          ),
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (previous) root.setAttribute('data-theme', previous);
    };
  }, []);

  return (
    <div className="arcade-root arcade-noise relative min-h-screen overflow-hidden">
      <ArcadeNavbar />

      <main className="relative">
        <ArcadeHero />
        <ArcadeMarquee />
        <ArcadeMenu />
        <ArcadeGames />
        <ArcadeEvents />
        <ArcadeGallery />
        <ArcadeTestimonialsSection />
        <ArcadeCTA />
      </main>

      <ArcadeFooter />
      <ReservationDrawer />
    </div>
  );
}
