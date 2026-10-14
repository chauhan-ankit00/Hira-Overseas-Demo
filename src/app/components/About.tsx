import { motion } from 'motion/react';

const aboutImage = new URL('../../img/about-us.png', import.meta.url).href;

export function About() {
  return (
    <div className="pt-16">
      
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 py-16 md:py-24">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm border border-blue-500/30">
            ABOUT US
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            className="overflow-hidden rounded-2xl border border-gray-700 shadow-2xl"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="Hira Overseas team connecting skilled professionals with global opportunities"
              className="w-full h-72 md:h-[28rem] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* <p className="text-blue-300 font-medium mb-4">About Us</p> */}
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Connecting Skilled Talent
              <span className="block text-blue-400">With the World</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a global manpower consultancy specialising in the deployment
              of healthcare, engineering, technical, and skilled blue-collar
              professionals. With a strong presence in India and partnerships
              across the Middle East and Europe, we deliver workforce solutions
              that meet the highest international standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.section
              className="rounded-2xl border border-gray-700 bg-slate-800/70 p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To connect exceptional talent with reputable global employers
                through integrity, quality, and efficiency — with zero hidden
                charges and full transparency.
              </p>
            </motion.section>
            <motion.section
              className="rounded-2xl border border-gray-700 bg-slate-800/70 p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To become the leading international manpower partner known for
                reliability, compliance, and service excellence across every
                sector we serve.
              </p>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
