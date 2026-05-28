import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Trophy, Medal, Award, Code2 } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Winner – QubitX National Hackathon',
    description: '400+ teams',
    color: 'yellow'
  },
  {
    icon: Medal,
    title: 'First Runner-Up – Research Paper',
    description: 'Kirori Mal College, DU',
    color: 'gray'
  },
  {
    icon: Award,
    title: 'Second Runner-Up – IIT Kanpur Policy Hackathon',
    description: 'National level competition',
    color: 'orange'
  },
  {
    icon: Code2,
    title: 'Participant – Mathura Hackathon',
    description: 'Innovation challenge',
    color: 'blue'
  },
  {
    icon: Code2,
    title: '100+ LeetCode Problems Solved',
    description: 'DSA focused',
    color: 'green'
  }
]

const colorClasses = {
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  gray: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  green: 'bg-green-500/10 text-green-400 border-green-500/30',
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-slate-400">Recognition and milestones</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: -5,
                z: 30,
                transition: { duration: 0.3 }
              }}
              className={`group relative overflow-hidden rounded-xl p-6 border preserve-3d cursor-pointer ${colorClasses[achievement.color]}`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center mb-4"
                >
                  <achievement.icon className="w-6 h-6" />
                </motion.div>

                <h3 className="font-bold mb-2 text-slate-100">{achievement.title}</h3>
                {achievement.description && (
                  <p className="text-sm opacity-80">{achievement.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* IIT Kanpur Hackathon Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-orange-400">
            IIT Kanpur Policy Hackathon Memories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '1769964026663.jpg.jpeg',
              'IMG20260131165900.jpg',
              'IMG_20260131_132306.jpg',
              'IMG_20260131_135256385.jpg.jpeg',
              'IMG_20260201_175610.jpg.jpeg',
              'IMG_20260201_194348.jpg.jpeg',
              'IMG_20260201_220739.jpg.jpeg',
              'IMG_20260204_174726.jpg.jpeg'
            ].map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, z: 20 }}
                className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 cursor-pointer"
              >
                <img
                  src={`/${img}`}
                  alt={`IIT Kanpur Hackathon ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mathura Hackathon Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
            Mathura Hackathon Memories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'mathura_1747844007151.jpeg',
              'mathura_1747844016870.jpeg',
              'mathura_1747844017770.jpeg',
              'mathura_1747844019259.jpeg',
              'mathura_1747844020118.jpeg',
              'mathura_1747844021524.jpeg',
              'mathura_1747844024317.jpeg',
              'mathura_1747844027483.jpeg'
            ].map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, z: 20 }}
                className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 cursor-pointer"
              >
                <img
                  src={`/${img}`}
                  alt={`Mathura Hackathon ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
