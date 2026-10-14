import { Briefcase, Users, Clock, Award, } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const recruitmentSteps = [
  {
    title: 'Requirement Analysis',
    description: 'Understanding your workforce needs in detail',
  },
  {
    title: 'Candidate Sourcing & Screening',
    description: 'Targeted search across our extensive network',
  },
  {
    title: 'Trade Test & Skills Evaluation',
    description: 'Rigorous multi-stage competency assessment',
  },
  {
    title: 'Employer Interview Coordination',
    description: 'Seamless scheduling and interview management',
  },
  {
    title: 'Medical & Document Clearance',
    description: 'Comprehensive health checks and paperwork',
  },
  {
    title: 'Visa Processing & Compliance',
    description: 'End-to-end visa and legal compliance support',
  },
  {
    title: 'Deployment & Travel Management',
    description: 'Coordinated logistics for smooth mobilisation',
  },
  {
    title: 'Post-Placement Support',
    description: 'Ongoing support after successful deployment',
  },
];

const services = [
  {
    icon: Briefcase,
    title: 'Medical & Healthcare',
    description: 'We supply qualified and licensed professionals:',
    features: ['Doctors & Specialists', 'Registered & Specialist Nurses', 'Clinical Technologists & Allied Health'],
    note: 'Clinical competence, global compliance, and employer-focused matching.'
  },
  {
    icon: Clock,
    title: "Engineering & Technical",
    desc: "Certified technical professionals including:",
    features: ["Mechanical, Electrical & Civil Engineers", "IT & Software Engineers", "Plant, Maintenance & Technical Technicians"],
    note:"Each candidate undergoes skill verification and background evaluation."
  },
  {
    icon: Users,
    title: "Skilled & Non-Skilled Workforce",
    desc: "Trained manpower across construction, manufacturing, and facility management:",
    features: ["Electricians, Plumbers, Masons", "Welders, Steel Fixers", "AC & HVAC Technicians", "Heavy Vehicle Drivers & General Labour"],
    note:"Trade-tested and mobilised quickly for urgent project demands."
  },
  {
    icon: Award,
    title: "Paramedical & Support Staff",
    desc: "Trained professionals for essential healthcare services:",
    features: ["Laboratory Technicians & Radiographers", "Operation Theatre (OT) Technicians", "Emergency Medical Staff", "Physiotherapy Assistants"],
    note: "Ensuring dependable assistance and skilled clinical support."
  }
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm mb-4 border border-blue-500/30">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Reliable Manpower Across Key Sectors
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From healthcare to construction, we deliver pre-screened, deployment-ready talent worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-shadow h-full bg-slate-800 border-gray-700">
                    <div className="flex items-start space-x-4 mb-6">
                      <motion.div
                        className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <span  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                      {service.note}
                    </span>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner with Video Background */}
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-an-office-4910-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black-300 to-gray-700"></div>
          </div>
          
          <div className="relative z-10 p-6 sm:p-8 md:p-12 text-white">
            <div>
              <motion.h3
                className="text-3xl md:text-4xl text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Recruitment Process 
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-center mb-8 text-blue-100 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                A streamlined, 8-step process that ensures accuracy, speed, and compliance for every international placement.
              </motion.p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recruitmentSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="rounded-xl border border-white/20 bg-slate-950/45 p-5 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700">
                      {index + 1}
                    </span>
                    <h4 className="mb-2 text-base font-semibold text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-blue-100/90">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
}