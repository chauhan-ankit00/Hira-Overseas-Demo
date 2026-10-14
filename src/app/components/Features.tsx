import { Scale, ClipboardCheck, Plane, Network, Scaling, Globe2 } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const features = [
  {
    icon: Scale,
    title: 'Licensed & Ethical Recruitment',
    description: 'Full legal compliance and strict ethical standards — transparent processes with zero hidden charges.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Rigorous Screening Standards',
    description: 'Multi-stage evaluation including skill verification, background checks, and role-specific assessments.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Plane,
    title: 'Accelerated Visa & Deployment',
    description: 'Dedicated documentation team ensures fast, hassle-free visa approvals and timely international deployment.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Network,
    title: 'Worldwide Employer Network',
    description: 'Partnerships with leading organisations across the Middle East, Europe, and global regions.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Scaling,
    title: 'Scalable Solutions',
    description: 'From startups to enterprises, our platform grows with your workforce requirements.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Access talent from around the world with our international network and local expertise.',
    color: 'bg-teal-100 text-teal-600',
  },
];

export function Features() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm mb-4 border border-blue-500/30">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Trusted & Award Winning Recruitment Agency
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            With 10+ years of recruitment experience, we have successfully delivered workforce solutions across healthcare, engineering, and skilled trade sectors. 
            Our market-focused hiring practices and rigorous compliance standards set us apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow h-full bg-slate-800 border-gray-700">
                    <motion.div
                      className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}