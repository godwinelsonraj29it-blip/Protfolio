import { motion } from 'framer-motion'
import { BookOpen, Lightbulb, Hammer, Globe, Rocket } from 'lucide-react'

export default function CurrentlyLearning() {
  const items = [
    {
      icon: BookOpen,
      title: 'Strengthening Programming Fundamentals',
    },
    {
      icon: Lightbulb,
      title: 'Improving Problem-Solving Skills',
    },
    {
      icon: Hammer,
      title: 'Exploring Software Development',
    },
    {
      icon: Globe,
      title: 'Learning German',
    },
    {
      icon: Rocket,
      title: 'Building Practical Projects',
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
    <section id="learning" className="py-20 px-4 bg-gradient-to-b from-space-dark to-space-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ STATUS // GROWING</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Currently Learning & Growing
          </h2>
          <p className="text-lg text-space-muted max-w-2xl mx-auto">
            Building stronger foundations one step at a time.
          </p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -4 }}
                className="premium-card p-6 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-space-blue/10 border border-space-cyan/30 rounded-lg mb-4 group-hover:bg-space-cyan/20 group-hover:border-space-cyan/60 transition-all">
                  <Icon className="text-space-cyan" size={24} />
                </div>
                <h3 className="font-semibold text-space-white text-sm leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
