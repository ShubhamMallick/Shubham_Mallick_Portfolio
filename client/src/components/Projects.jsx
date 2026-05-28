import { motion } from 'framer-motion'
import { ExternalLink, Github, Shield, GraduationCap, BarChart3, AlertTriangle, Rocket, Droplets, Mic, Brain, Cat, MessageSquare } from 'lucide-react'

const liveProjects = [
  {
    title: 'Cognitive SOC Framework',
    icon: Shield,
    color: 'red',
    link: 'https://github.com/ShubhamMallick/Cognitive-SOC-Framework',
    live: 'https://multi-agent-cognitive-soc-framework.onrender.com/',
    description: 'Enterprise-grade AI-powered Security Operations Center with 14 specialized agents, real-time anomaly detection using ensemble ML models, and LLM-powered incident explanations.',
    features: [
      '14 specialized AI agents (Policy, Threat, Risk, Privacy, etc.)',
      'Dual ML models: Random Forest + Isolation Forest (30K+ samples)',
      'Real-time SOC dashboard with threat analytics',
      'LLM-powered explanations with OpenAI GPT',
      'Autonomous decision making with confidence scoring'
    ],
    tech: ['Python', 'FastAPI', 'OpenAI GPT', 'Scikit-learn', 'Random Forest', 'Isolation Forest']
  },
  {
    title: 'AI Student Guidance System',
    icon: GraduationCap,
    color: 'blue',
    link: 'https://github.com/ShubhamMallick/Mitigating_Educational_Uncertainity',
    live: 'https://mitigating-educational-uncertainity-xwrr.onrender.com/',
    description: 'End-to-end AI education system with Dashboard-centric ML + LLM architecture. ML modules generate predictions, Dashboard acts as single source of truth, LLM answers contextual questions.',
    features: [
      '6 ML models for stream/course recommendations',
      'Dropout risk prediction analytics',
      'LLM module with LangChain integration',
      '50+ REST APIs using FastAPI',
      'Career mapping and institution directory'
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'TensorFlow', 'MongoDB', 'Streamlit']
  },
  {
    title: 'Voice Activated Website',
    icon: Mic,
    color: 'pink',
    link: 'https://github.com/ShubhamMallick/Voice_Activated_Website',
    live: 'https://voicenav.netlify.app',
    description: 'Accessibility-focused voice-controlled website enabling hands-free navigation. Uses Web Speech API for real-time speech recognition and multi-language support.',
    features: [
      'Real-time speech recognition with Web Speech API',
      'Voice commands for page navigation and scrolling',
      'Dynamic section expand/collapse via voice',
      'Multi-language support for global accessibility',
      'Privacy-focused with no data storage'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Speech API', 'Netlify']
  }
]

const featuredProjects = [
  {
    title: 'MockMate - AI Mock Interview',
    icon: Brain,
    color: 'purple',
    link: 'https://github.com/ShubhamMallick/AI-Powered_Mock_Interview_Platform',
    description: 'AI-powered mock interview platform using Google Gemini API. Generates personalized questions from resume uploads, provides real-time feedback and adaptive difficulty adjustment.',
    features: [
      'Resume-based personalized question generation',
      'Google Gemini API for AI-driven interviews',
      'Real-time assessment and feedback',
      'Progress tracking and performance insights',
      'Adaptive difficulty based on responses'
    ],
    tech: ['Python', 'Google Gemini API', 'FastAPI', 'NLP', 'React']
  },
  {
    title: 'Prayatna – Fake Welfare Detection',
    icon: AlertTriangle,
    color: 'orange',
    link: 'https://github.com/ShubhamMallick/Fake_Welfare_Detection_System',
    description: 'Modular fraud-detection system for welfare programs. Combines NLP PDF extraction, anomaly detection, duplicate detection, and fraud network analysis with voice-controlled interface.',
    features: [
      'NLP feature extraction from PDF documents using spaCy',
      'Anomaly detection with IsolationForest',
      'Duplicate detection using XGBoost pipeline',
      'Fraud network analysis with NetworkX',
      'Voice-controlled web interface'
    ],
    tech: ['Python', 'FastAPI', 'Flask', 'spaCy', 'XGBoost', 'NetworkX']
  },
  {
    title: 'ISS Cargo Stowage Management',
    icon: Rocket,
    color: 'cyan',
    link: 'https://github.com/ShubhamMallick/space-corgo-stowage-management',
    description: 'React-based cargo management system for International Space Station. Optimizes cargo stowage with intuitive UI and Dockerized deployment for hackathon challenge.',
    features: [
      'Intuitive cargo stowage optimization interface',
      'Dockerized deployment with Ubuntu 22.04',
      'Production-optimized build pipeline',
      'Responsive React frontend',
      'ISS mission-specific cargo tracking'
    ],
    tech: ['React', 'Node.js', 'Docker', 'Ubuntu', 'CSS']
  },
  {
    title: 'RWH Aqualytics',
    icon: Droplets,
    color: 'teal',
    link: 'https://github.com/ShubhamMallick/RWH_AQUALITCS',
    description: 'Integrated water resource management system combining Rainwater Harvesting Analysis and Aquifer Type Prediction with interactive visualizations for sustainable development.',
    features: [
      'Rainwater harvesting potential analysis',
      'Aquifer type prediction system',
      'Interactive data visualizations',
      'REST API endpoints for water data',
      'Sustainable development insights'
    ],
    tech: ['Python', 'FastAPI', 'Pandas', 'Plotly', 'Machine Learning']
  },
  {
    title: 'Animal Image Classification',
    icon: Cat,
    color: 'yellow',
    link: 'https://github.com/ShubhamMallick/Animal_classification',
    description: 'Streamlit web app for animal image classification using pre-trained TensorFlow/Keras model. Classifies 15 animal species with confidence scores.',
    features: [
      '15-class animal classification (Bear, Tiger, Lion, etc.)',
      'Pre-trained TensorFlow/Keras deep learning model',
      'Streamlit interactive web interface',
      'Real-time confidence scoring',
      '224x224 image preprocessing pipeline'
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'Deep Learning']
  },
  {
    title: 'Zephyra Chatbot',
    icon: MessageSquare,
    color: 'indigo',
    link: 'https://github.com/ShubhamMallick/Zephyra-Chabot',
    description: 'Conversational AI chatbot with natural language understanding and contextual responses for interactive user assistance.',
    features: [
      'Natural language understanding',
      'Contextual conversation handling',
      'Interactive response generation',
      'Customizable chat interface',
      'Multi-turn dialogue support'
    ],
    tech: ['Python', 'NLP', 'Machine Learning', 'FastAPI']
  }
]

const colorClasses = {
  red: {
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    border: 'border-red-500/50',
    shadow: 'shadow-red-500/25'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/50',
    shadow: 'shadow-blue-500/25'
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/50',
    shadow: 'shadow-green-500/25'
  },
  orange: {
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    border: 'border-orange-500/50',
    shadow: 'shadow-orange-500/25'
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/50',
    shadow: 'shadow-purple-500/25'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/50',
    shadow: 'shadow-cyan-500/25'
  },
  teal: {
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    border: 'border-teal-500/50',
    shadow: 'shadow-teal-500/25'
  },
  pink: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    border: 'border-pink-500/50',
    shadow: 'shadow-pink-500/25'
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    border: 'border-yellow-500/50',
    shadow: 'shadow-yellow-500/25'
  },
  indigo: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/50',
    shadow: 'shadow-indigo-500/25'
  }
}

export default function Projects() {
  const renderProjectCard = (project, index) => {
    const colors = colorClasses[project.color]
    return (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          type: 'spring',
          stiffness: 100
        }}
        whileHover={{
          scale: 1.02,
          rotateY: 5,
          rotateX: -5,
          z: 50,
          transition: { duration: 0.3 }
        }}
        className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all preserve-3d flex flex-col"
      >
        <div className="p-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
              <project.icon className={`w-6 h-6 ${colors.text}`} />
            </div>
            <div className="flex gap-2">
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </motion.a>
              )}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                title="View Code"
              >
                <Github className="w-5 h-5 text-slate-400" />
              </motion.a>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-sm text-slate-500 flex items-start"
                >
                  <span className={`${colors.text} mr-2`}>•</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.1, z: 10 }}
                className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border border-slate-700`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Demo Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo Projects</h2>
          <p className="text-slate-400">Deployed applications you can try right now</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 perspective-1000 mb-24">
          {liveProjects.map((project, index) => renderProjectCard(project, index))}
        </div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">More work in AI/ML and full-stack development</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 perspective-1000">
          {featuredProjects.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>
    </section>
  )
}
