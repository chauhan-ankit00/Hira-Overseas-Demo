import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { OurTeam } from './components/OurTeam';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Career } from './components/Career';
import { GlobalReach } from './components/GlobalReach';

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const isAboutPage = currentPath === '/about';
  const isServicesPage = currentPath === '/services';
  const isContactPage = currentPath === '/contact';
  const isCareerPage = currentPath === '/career';

  useEffect(() => {
    if (!window.location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {isAboutPage ? (
          <About />
        ) : isServicesPage ? (
          <Services />
        ) : isContactPage ? (
          <Contact />
        ) : isCareerPage ? (
          <Career />
        ) : (
          <>
            <Hero />
            <About />
            <Features />
          
            <Services />
            <Career />
            <GlobalReach />
            <OurTeam />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}