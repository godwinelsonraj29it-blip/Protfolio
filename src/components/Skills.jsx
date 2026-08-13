import { motion } from 'framer-motion'
import { Code, Cpu, Brain, Zap, Rocket, Satellite } from 'lucide-react'

export default function Skills() {
  const skills = [
    {
      icon: Code,
      title: 'C',
      description: 'Programming fundamentals',
    },
    {
      icon: Cpu,
      title: 'Python',
      description: 'Programming and problem solving',
    },
    {
      icon: Code,
      title: 'Java',
      description: 'Object-oriented programming fundamentals',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Logical thinking and algorithmic problem solving',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-space-dark to-space-navy relative overflow-hidden">
      {/* Background space decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbiting satellites */}
        <motion.div
          className="absolute top-10 left-20 opacity-20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Satellite className="text-space-cyan" size={40} />
        </motion.div>

        {/* Floating planets */}
        <motion.div
          className="absolute top-1/4 right-20 opacity-25"
          animate={{ y: [0, -30, 0], rotate: [0, 360] }}
          transition={{ y: { duration: 6, repeat: Infinity }, rotate: { duration: 20, repeat: Infinity, ease: 'linear' } }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-space-cyan/30 to-space-blue/15 border border-space-cyan/20 shadow-lg shadow-space-cyan/20"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 opacity-20"
          animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-purple/25 to-space-blue/10 border border-space-purple/15"></div>
        </motion.div>

        {/* Floating rockets */}
        <motion.div
          className="absolute top-1/2 right-10 opacity-30"
          animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Rocket className="text-space-cyan/50" size={32} strokeWidth={1.5} />
        </motion.div>

        {/* Asteroids */}
        <motion.div
          className="absolute bottom-20 right-1/4 opacity-40"
          animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity } }}
        >
          <div className="w-3 h-3 bg-space-cyan/60 rounded-full shadow-md shadow-space-cyan/40"></div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-10 opacity-25"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <div className="w-2 h-2 bg-space-blue/50 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/2 opacity-30"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-8 h-8 rounded-full border border-space-cyan/20"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ TECHNOLOGY // STACK</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-space-muted max-w-2xl mx-auto">
            Technologies and problem-solving skills I'm developing.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -4 }}
                className="premium-card p-6 text-center group cursor-pointer relative"
              >
                {/* Floating orbit effect on hover */}
                <motion.div
                  className="absolute -inset-1 rounded-lg bg-gradient-to-r from-space-cyan/0 to-space-purple/0 opacity-0 group-hover:opacity-20 group-hover:from-space-cyan/20 group-hover:to-space-purple/20 -z-10 blur transition-all"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                <div className="inline-flex items-center justify-center w-14 h-14 bg-space-blue/10 border border-space-cyan/30 rounded-lg mb-4 group-hover:bg-space-cyan/20 group-hover:border-space-cyan/60 transition-all">
                  <Icon className="text-space-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold text-space-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-space-muted">
                  {skill.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
