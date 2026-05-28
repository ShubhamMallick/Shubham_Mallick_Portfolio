import { motion } from 'framer-motion'
import { Code2, Brain, Bot, Server, Wrench, Database } from 'lucide-react'

const skills = [
  {
    category: 'Languages',
    icon: Code2,
    color: 'blue',
    items: ['Python', 'C++', 'SQL']
  },
  {
    category: 'ML / AI',
    icon: Brain,
    color: 'purple',
    items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'SpaCy', 'NER', 'Tokenization', 'SHAP', 'LIME']
  },
  {
    category: 'LLM & Systems',
    icon: Bot,
    color: 'pink',
    items: ['LangChain', 'Prompt Engineering', 'RAG', 'Multi-Agent Systems', 'OpenAI', 'Mistral']
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'green',
    items: ['FastAPI', 'Flask', 'REST APIs', 'Async Processing']
  },
  {
    category: 'Tools',
    icon: Wrench,
    color: 'orange',
    items: ['Git', 'Docker', 'MongoDB', 'Jupyter', 'VS Code']
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'cyan',
    items: ['MongoDB', 'PostgreSQL', 'Redis']
  }
]

const colorClasses = {
  blue: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20',
  pink: 'bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20',
  green: 'bg-green-500/10 text-green-400 group-hover:bg-green-500/20',
  orange: 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20',
}

const borderClasses = {
  blue: 'hover:border-blue-500/50',
  purple: 'hover:border-purple-500/50',
  pink: 'hover:border-pink-500/50',
  green: 'hover:border-green-500/50',
  orange: 'hover:border-orange-500/50',
  cyan: 'hover:border-cyan-500/50',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-slate-400">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
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
              className={`group bg-slate-900 rounded-xl p-6 border border-slate-800 ${borderClasses[skill.color]} transition-all duration-300 preserve-3d cursor-pointer`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 ${colorClasses[skill.color]}`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1, z: 20 }}
                    className="skill-tag"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
