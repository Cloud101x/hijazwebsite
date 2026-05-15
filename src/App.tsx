import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Cursor } from './components/Cursor';
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { Services } from './components/sections/Services';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { TechStack } from './components/sections/TechStack';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { Stats } from './components/sections/Stats';
import { Studio } from './components/sections/Studio';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.3);
        gsap.to(el, {
          yPercent: speed * -40,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 85%',
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 36, filter: 'blur(8px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1,
              ease: 'expo.out',
              stagger: 0.08,
            },
          ),
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-obsidian text-off-white">
        <Cursor />
        <ScrollProgress />
        <Navbar />

        <main className="relative">
          <Hero />
          <TrustedBy />
          <Services />
          <FeaturedProjects />
          <TechStack />
          <WhyChooseUs />
          <Process />
          <Stats />
          <Studio />
          <Testimonials />
          <CTA />
        </main>

        <Footer />

        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>
    </ThemeProvider>
  );
}