import { motion } from 'framer-motion'
import { BookOpen, FileText, Award } from 'lucide-react'

const research = {
  title: 'Reducing Decision Uncertainty in AI-Based Student Career Guidance using Hybrid ML & LLM Framework',
  journal: 'Published in IJSRTM (2026)',
  description: 'Proposed hybrid architecture combining ML models and LLMs for improved decision-making in educational guidance systems.',
  link: '#'
}

const certifications = [
  'Oracle Cloud Infrastructure – AI Foundations Associate',
  'NPTEL – Introduction to Machine Learning',
  'Pregrad – AI/ML Industrial Training',
  'Rinex – AI/ML Certification',
  'CodexIntern – AI/ML Internship',
  'Cisco – Cybersecurity',
  'Great Learning – Neural Networks'
]

export default function Research() {
  return (
    <section id="research" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Certifications</h2>
          <p className="text-slate-400">Academic contributions and credentials</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Paper */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
              Research Publication
            </h3>

            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 preserve-3d"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                <FileText className="w-4 h-4 mr-1" />
                {research.journal}
              </div>

              <h4 className="text-lg font-bold mb-3 text-slate-100">
                {research.title}
              </h4>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {research.description}
              </p>

              <motion.a
                href={research.link}
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View Paper
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-purple-400" />
              Certifications
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10, rotateY: 3 }}
                  className="flex items-center p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-all preserve-3d cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
