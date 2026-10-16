import { motion } from 'motion/react';

const teamMembers = [
  {
    name: 'Shahzad Khan',
    role: 'FOUNDER & CEO',
    description: 'Leads strategic recruitment planning and international workforce mobilization for clients across priority markets.',
    image: new URL('../../img/team-1.png', import.meta.url).href,
  },
  {
    name: 'MD Adam Younus',
    role: 'OVERSEAS MANAGER',
    description: 'Coordinates cross-border hiring, employer alignment, and candidate support for overseas placements.',
    image: new URL('../../img/team-2.jpeg', import.meta.url).href,
  },
  {
    name: 'Team member 3',
    role: 'International Recruitment',
    description: 'Supports employers and candidates throughout the international hiring journey with screening and coordination.',
    image: new URL('../../img/', import.meta.url).href,
  },
  {
    name: 'Team Member 4',
    role: 'Deployment & Candidate Support',
    description: 'Helps candidates prepare for a smooth, well-supported transition to their new roles and destinations.',
    image: new URL('../../img/', import.meta.url).href,
  },
];

export function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-sm text-blue-300 backdrop-blur-sm mb-4">
            OUR TEAM
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Meet the People Behind Our Success
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-400">
            Experienced professionals committed to connecting the world&apos;s
            best talent with leading global employers.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-gray-700 bg-slate-800"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-400">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
