import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../../lib/siteConfig';

const logo = new URL('../../img/logo.png', import.meta.url).href;

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Hira Overseas logo" className="w-8 h-8 mr-2 object-contain" />
              <span className="font-semibold text-xl text-white">Hira Overseas</span>
            </div>
            <p className="text-gray-400 mb-4">
              A global manpower consultancy connecting exceptional talent with leading employers across the Middle East, Europe, and beyond.
            </p>
            <div className="flex space-x-4" aria-label="Social media links">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 9.5h2.8v8.5H5.5V9.5Zm4.9 0h2.67v1.16h.04c.37-.7 1.28-1.44 2.64-1.44 2.83 0 3.35 1.86 3.35 4.28v6.5h-2.8v-6.08c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.2v6.2H10.4V9.5Z" />
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V7.2c0-.9.3-1.6 1.7-1.6H16V2.7c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7v3.2h2.4v8h4.1Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5.1-3.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-white transition-colors">Medical & Healthcare</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Engineering & Technical</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Skilled & Non-Skilled Workforce</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Paramedical & Support Staff</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/career" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <address className="not-italic">
            <h3 className="text-white mb-4">Head Office</h3>
            <div className="flex items-start gap-2 text-gray-400 leading-relaxed mb-3">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" />
              <p>
                CV Raman Marg, Sarai Jullena,<br />
                New Friends Colony,<br />
                New Delhi, Delhi 110025
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <a href={siteConfig.contact.phoneHref} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2026 Hira Overseas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
