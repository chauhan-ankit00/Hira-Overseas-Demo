import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatePresence, motion } from 'motion/react';

const heroImages = [
  new URL('../../img/1.jpg', import.meta.url).href,
  new URL('../../img/2.jpg', import.meta.url).href,
  new URL('../../img/3.jpg', import.meta.url).href,
  new URL('../../img/4.jpg', import.meta.url).href,
  new URL('../../img/5.jpg', import.meta.url).href,
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-slate-800/85 to-blue-900/80"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm border border-blue-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="mr-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            GLOBAL MANPOWER CONSULTANCY
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Global <motion.span
                className="text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Talent
              </motion.span> Delivered with Precision
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide highly qualified Doctors, Engineers, Nurses, Paramedical Staff, and Skilled Tradesmen to leading institutions across the Middle East, Europe, and Africa.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="/contact" className="inline-block">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white">
                  Request Manpower
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
               <a href="/services" className="inline-block">
                <Button size="lg" variant="outline" className="border-gray-400 text-gray-600 hover:bg-white/10 hover:text-white">
                  Our Services
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl text-blue-400">1O+</div>
                <div className="text-sm text-gray-400">YEARS OF EXPERIENCE</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl text-blue-400">1K+</div>
                <div className="text-sm text-gray-400">SUCCESSFUL PLACEMENTS</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl text-blue-400">50+</div>
                <div className="text-sm text-gray-400">TRUSTED EMPLOYERS</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl text-blue-400">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Rotating image gallery */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-slate-800">
              <AnimatePresence initial={false}>
                <motion.img
                  key={heroImages[activeImage]}
                  src={heroImages[activeImage]}
                  alt={`Hira Overseas workforce and recruitment ${activeImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 55%, rgba(15, 23, 42, 0.7) 100%)',
                }}
              />
            </div>
            {/* Floating Card */}
            {/* <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
               <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <div>
                  <div className="text-sm text-gray-400">Avg. Hiring Time</div>
                  <div className="text-xl text-white">3 Days</div>
                </div>
              </div> 
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}