import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, FileText, FolderOpen, ChevronDown, Code2, Linkedin, Database } from 'lucide-react'
import { useRef } from 'react'
import Robot3D from './Robot3D'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* 3D Robot Background */}
      <Robot3D />

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-transparent pointer-events-none" />
      
      {/* Floating Orbs - Reduced opacity to not compete with 3D */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
        >
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-blue-400 mr-2"
          />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text preserve-3d"
        >
          Shubham Mallick
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-slate-400 mb-4 font-medium"
        >
          AI/ML Engineer | Building Production-Ready AI Systems
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg"
        >
          I build scalable AI systems using ML, LLMs, and backend engineering — focused on real-world impact, not just models.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/25"
          >
            <FolderOpen className="w-5 h-5 mr-2" />
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/ShubhamMallick"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Shubham_Mallick_Resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700"
          >
            <FileText className="w-5 h-5 mr-2" />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 flex justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/ShubhamMallick', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/shubham-mallick-b3223929a', label: 'LinkedIn' },
            { icon: Code2, href: 'https://leetcode.com/u/shubhammallick678/', label: 'LeetCode' },
            { icon: Database, href: 'https://www.kaggle.com/shubham255', label: 'Kaggle' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5, rotateY: 10 }}
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
