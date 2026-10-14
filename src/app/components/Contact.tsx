import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const contactEmail = 'hiraenterprisesdel@gmail.com';
const officeAddress =
  'CV Raman Marg, Sarai Jullena, New Friends Colony, New Delhi, Delhi 110025';
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;

export function Contact() {
  const [emailDraftOpened, setEmailDraftOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const companyAddress = String(formData.get('companyAddress') ?? '');
    const subject = String(formData.get('subject') ?? '');
    const message = String(formData.get('message') ?? '');
    const body = [
      `Name: ${name}`,
      `Phone Number: ${phone}`,
      `Company / Address: ${companyAddress || 'Not provided'}`,
      '',
      message,
    ].join('\n');

    window.location.href =
      `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setEmailDraftOpened(true);
  };

  return (
    <section className="min-h-screen bg-slate-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-sm text-blue-300">
            Contact Us
          </div>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Let&apos;s Discuss Your Manpower Needs
          </h1>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-gray-700 bg-slate-800 p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-2 text-2xl font-semibold text-white">
              Send Us a Message
            </h2>
            <p className="mb-8 text-gray-400">
              We&apos;ll respond within 24 hours on business days.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-200">
                  Your Name
                  <Input
                    name="name"
                    autoComplete="name"
                    required
                    className="mt-2 h-11 border-gray-600 bg-slate-900 text-white placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-200">
                  Phone Number
                  <Input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="mt-2 h-11 border-gray-600 bg-slate-900 text-white placeholder:text-gray-500"
                    placeholder="+91"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-gray-200">
                Company / Address
                <Input
                  name="companyAddress"
                  autoComplete="organization"
                  className="mt-2 h-11 border-gray-600 bg-slate-900 text-white placeholder:text-gray-500"
                  placeholder="Company or address (optional)"
                />
              </label>

              <label className="block text-sm font-medium text-gray-200">
                Subject
                <Input
                  name="subject"
                  required
                  className="mt-2 h-11 border-gray-600 bg-slate-900 text-white placeholder:text-gray-500"
                  placeholder="How can we help?"
                />
              </label>

              <label className="block text-sm font-medium text-gray-200">
                Message
                <Textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 border-gray-600 bg-slate-900 text-white placeholder:text-gray-500"
                  placeholder="Tell us about your requirements"
                />
              </label>

              <Button
                type="submit"
                className="h-11 w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto"
              >
                Send Message
                <Send className="h-4 w-4" />
              </Button>
              {emailDraftOpened && (
                <p className="text-sm text-blue-300" role="status">
                  Your email app should open with the message ready to send.
                </p>
              )}
            </form>
          </motion.div>

          <motion.aside
            className="rounded-2xl border border-blue-400/10 bg-[#1e3a68] p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Contact Information
            </h2>
            <p className="mb-8 text-lg text-blue-100/70">
              Reach out directly or visit our office in New Delhi.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-100/60">
                    Our Office
                  </h3>
                  <a
                    href={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.24153976673!2d77.26681317572327!3d28.621040775685173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f0aa23aed5%3A0x5e1fccb4d48752e7!2sCV%20Raman%20Marg%2C%20Sarai%20Jullena%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1707055123456`}
                    target="_blank"
                    rel="noreferrer"
                    className="leading-relaxed text-white hover:text-blue-200"
                  >
                    CV Raman Marg, Sarai Jullena,
                    <br />
                    New Friends Colony, New Delhi, Delhi 110025
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-100/60">
                    Phone
                  </h3>
                  <a
                    href="tel:+919582414590"
                    className="text-lg text-white hover:text-blue-200"
                  >
                    +91 9582414590
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-100/60">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="break-all text-lg text-white hover:text-blue-200"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-white/15">
              <iframe
                title="Map to Hira Overseas office in New Delhi"
                src={mapUrl}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
