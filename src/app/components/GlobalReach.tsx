import { motion } from 'motion/react';

const countries = [
  {
    name: 'United Arab Emirates',
    flag: 'ae',
    description: 'Connecting skilled professionals with employers across the Emirates.',
  },
  {
    name: 'Saudi Arabia',
    flag: 'sa',
    description: 'Supporting healthcare, engineering, and large-scale projects.',
  },
  {
    name: 'Qatar',
    flag: 'qa',
    description: 'Supplying qualified talent for growing industries and infrastructure.',
  },
  {
    name: 'Kuwait',
    flag: 'kw',
    description: 'Matching experienced professionals with local workforce needs.',
  },
  {
    name: 'Oman',
    flag: 'om',
    description: 'Helping employers find dependable technical and skilled talent.',
  },
  {
    name: 'Bahrain',
    flag: 'bh',
    description: 'Connecting employers with capable healthcare and trade professionals.',
  },
];

function CountryFlag({ code }: { code: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 40"
      className="w-10 h-7 shrink-0 rounded-sm shadow-sm ring-1 ring-white/20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {code === 'ae' && (
        <>
          <path fill="#00732f" d="M0 0h60v13.33H0z" />
          <path fill="#fff" d="M0 13.33h60v13.34H0z" />
          <path fill="#000" d="M0 26.67h60V40H0z" />
          <path fill="#ff0000" d="M0 0h18v40H0z" />
        </>
      )}
      {code === 'sa' && (
        <>
          <path fill="#006c35" d="M0 0h60v40H0z" />
          <text x="30" y="19" fill="#fff" fontSize="7" textAnchor="middle" fontFamily="serif">
            لا إله إلا الله
          </text>
          <path fill="#fff" d="M15 25h31l-2 2H17z" />
          <path fill="#fff" d="M44 24l7 1-7 2z" />
        </>
      )}
      {code === 'qa' && (
        <>
          <path fill="#8a1538" d="M0 0h60v40H0z" />
          <path fill="#fff" d="M0 0h21l-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4H0z" />
        </>
      )}
      {code === 'kw' && (
        <>
          <path fill="#007a3d" d="M0 0h60v13.33H0z" />
          <path fill="#fff" d="M0 13.33h60v13.34H0z" />
          <path fill="#ce1126" d="M0 26.67h60V40H0z" />
          <path fill="#000" d="M0 0h16l10 13.33-10 13.34H0z" />
        </>
      )}
      {code === 'om' && (
        <>
          <path fill="#fff" d="M0 0h60v13.33H0z" />
          <path fill="#db161b" d="M0 13.33h60v13.34H0z" />
          <path fill="#008000" d="M0 26.67h60V40H0z" />
          <path fill="#db161b" d="M0 0h17v40H0z" />
        </>
      )}
      {code === 'bh' && (
        <>
          <path fill="#ce1126" d="M0 0h60v40H0z" />
          <path fill="#fff" d="M0 0h20l-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4H0z" />
        </>
      )}
    </svg>
  );
}

export function GlobalReach() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm mb-4 border border-blue-500/30">
            GLOBAL REACH
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Countries We Deploy To
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Our workforce solutions span across the Middle East, Europe, Asia-Pacific, and beyond — placing talent where it&apos;s needed most.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {countries.map((country, index) => (
            <motion.article
              key={country.name}
              className="rounded-xl border border-gray-700 bg-slate-800/80 p-5 md:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white mb-2">
                <CountryFlag code={country.flag} />
                {country.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {country.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
