import { motion } from 'framer-motion'

export default function Languages() {
  const languages = [
    {
      code: 'TA',
      name: 'Tamil',
      level: 'Native',
    },
    {
      code: 'EN',
      name: 'English',
      level: 'Fluent',
    },
    {
      code: 'ML',
      name: 'Malayalam',
      level: 'Fluent',
    },
    {
      code: 'DE',
      name: 'German',
      level: 'Learning',
      isLearning: true,
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
    <section className="py-20 px-4 bg-gradient-to-b from-space-dark to-space-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ LANGUAGE // PROTOCOLS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Languages
          </h2>
        </motion.div>

        {/* Languages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {languages.map((language, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card p-6 text-center relative overflow-hidden group"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-space-blue/10 border border-space-cyan/30 rounded-lg mb-4 group-hover:bg-space-cyan/20 group-hover:border-space-cyan/60 transition-all">
                  <span className="text-space-cyan font-bold text-sm">
                    {language.code}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-space-white mb-1">
                  {language.name}
                </h3>
                <p className="text-sm text-space-secondary mb-3">
                  {language.level}
                </p>
                {language.isLearning && (
                  <span className="inline-block px-3 py-1 bg-space-cyan/10 border border-space-cyan/40 text-space-cyan rounded-full text-xs font-semibold">
                    Currently Learning
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
