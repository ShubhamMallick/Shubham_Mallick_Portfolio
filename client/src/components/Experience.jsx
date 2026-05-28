import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'ML Intern',
    company: 'Unified Mentor',
    period: '2024',
    description: [
      'Built ML models for classification and recommendation systems',
      'Designed end-to-end ML pipelines',
      'Improved model accuracy using tuning and validation techniques'
    ]
  },
  {
    role: 'ML Intern',
    company: 'CodexIntern',
    period: '2024',
    description: [
      'Developed spam detection & house price prediction systems',
      'Applied feature engineering and evaluation techniques',
      'Implemented various ML algorithms for comparison'
    ]
  },
  {
    role: 'Project Intern',
    company: 'Zephyra',
    period: '2023',
    description: [
      'Built NLP chatbot using hybrid ML + rule-based approach',
      'Designed backend workflows for real-time response systems',
      'Integrated multiple NLP libraries for improved accuracy'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-slate-400">My professional journey</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.3, rotate: 180 }}
                className="absolute left-4 top-0 w-8 h-8 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center z-10"
              >
                <Briefcase className="w-4 h-4 text-blue-400" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 3, x: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all preserve-3d"
              >
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                      className="text-slate-400 text-sm flex items-start"
                    >
                      <span className="text-blue-400 mr-2">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
