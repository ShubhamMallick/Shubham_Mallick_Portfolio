import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 10, suffix: '+', label: 'ML Projects', color: 'blue' },
  { value: 3, suffix: '+', label: 'Internships', color: 'purple' },
  { value: 100, suffix: '+', label: 'LeetCode Solved', color: 'pink' },
  { value: 5, suffix: '+', label: 'Certifications', color: 'green' },
]

const colorClasses = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
  green: 'text-green-400',
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 rounded mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              I am a Computer Science student specializing in AI/ML systems, with experience building and deploying real-world applications including multi-agent AI systems, NLP pipelines, and decision intelligence platforms.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              I have worked on end-to-end ML pipelines — from data processing and model training to backend APIs and deployment.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              My focus is on solving real-world problems using AI, particularly in areas like{' '}
              <span className="text-blue-400 font-medium">cybersecurity</span>,{' '}
              <span className="text-purple-400 font-medium">education</span>, and{' '}
              <span className="text-pink-400 font-medium">decision systems</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                  <img 
                    src="/profile.jpg" 
                    alt="Shubham Mallick" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle ring effect */}
                <div className="absolute -inset-1 rounded-full border-2 border-blue-500/20" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 preserve-3d"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, z: 30 }}
                    className="text-center p-4 bg-slate-900 rounded-xl preserve-3d"
                  >
                    <div className={`text-3xl font-bold mb-1 ${colorClasses[stat.color]}`}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
