export const siteConfig = {
  siteName: 'Hira Overseas',
  siteUrl:
    (import.meta as ImportMeta & { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL ??
    'https://hiraoverseas.com',
  defaultDescription:
    'Hira Overseas is a manpower consultancy connecting skilled professionals with employers across the Middle East, Europe, and Africa.',
  contact: {
    email: 'info@hiraoverseas.com',
    legacyEmail: 'hiraenterprisesdel@gmail.com',
    phone: '+91 9582414590',
    phoneHref: 'tel:+919582414590',
    address:
      'CV Raman Marg, Sarai Jullena, New Friends Colony, New Delhi, Delhi 110025',
  },
  logoPath: '/logo.png',
  routes: {
    home: '/',
    about: '/about',
    services: '/services',
    career: '/career',
    contact: '/contact',
  },
} as const;

export const getCanonicalUrl = (path = '/') => new URL(path, siteConfig.siteUrl).toString();
