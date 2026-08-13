import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { value: '8.5', label: 'Current CGPA' },
    { value: '3rd', label: 'Current Semester' },
    { value: '2029', label: 'Expected Graduation' },
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
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-space-dark to-space-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ SECTOR // PROFILE</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-space-muted max-w-2xl mx-auto">
            A student focused on learning, building and improving.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-base text-space-muted leading-relaxed mb-6">
              I'm a 2nd-year B.Tech Information Technology student with a strong interest in programming and problem-solving. I enjoy learning new technologies and exploring how to apply them in practical scenarios. My journey in tech is driven by curiosity and a desire to build meaningful solutions.
            </p>
            <p className="text-base text-space-muted leading-relaxed">
              Currently, I'm strengthening my foundation in programming languages including C, Python, and Java, while continuously developing my problem-solving skills. I believe in continuous learning and am committed to growing as a technology professional.
            </p>
          </motion.div>

          {/* Right - Empty space for balance */}
          <div></div>
        </div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-space-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
