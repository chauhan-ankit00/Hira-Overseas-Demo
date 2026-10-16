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
import { SEO } from './components/SEO';
import { siteConfig } from '../lib/siteConfig';

const seoByRoute = {
  '/': {
    title: 'Global Manpower & Recruitment Consultancy',
    description:
      'Hira Overseas helps employers source qualified healthcare, engineering, and skilled manpower from India to the Middle East, Europe, and Africa.',
    path: '/',
  },
  '/about': {
    title: 'About Hira Overseas',
    description:
      'Learn about Hira Overseas, our mission, and how we connect skilled professionals with trusted employers worldwide.',
    path: '/about',
  },
  '/services': {
    title: 'Our Recruitment & Manpower Services',
    description:
      'Explore Hira Overseas services for medical staffing, engineering recruitment, skilled workforce deployment, and international manpower solutions.',
    path: '/services',
  },
  '/career': {
    title: 'Career Opportunities',
    description:
      'Discover career opportunities with Hira Overseas across healthcare, technical, and skilled workforce roles.',
    path: '/career',
  },
  '/contact': {
    title: 'Contact Hira Overseas',
    description:
      'Get in touch with Hira Overseas for manpower requirements, recruitment support, and workforce deployment enquiries.',
    path: '/contact',
  },
} as const;

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const isAboutPage = currentPath === '/about';
  const isServicesPage = currentPath === '/services';
  const isContactPage = currentPath === '/contact';
  const isCareerPage = currentPath === '/career';
  const pageMeta = seoByRoute[currentPath as keyof typeof seoByRoute] ?? seoByRoute['/'];

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
      <SEO {...pageMeta} image={new URL(siteConfig.logoPath, siteConfig.siteUrl).toString()} />
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