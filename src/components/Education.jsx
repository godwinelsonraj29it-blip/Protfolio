import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const academics = [
    { label: 'CGPA', value: '8.5' },
    { label: '12th', value: '85%' },
    { label: '10th', value: '82%' },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-space-navy to-space-midnight">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ MISSION // 01</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Education
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-12 top-16 bottom-0 w-1 bg-gradient-to-b from-space-cyan to-space-purple"></div>

            {/* Content */}
            <div className="pl-24 md:pl-32">
              <div className="premium-card p-8 relative">
                {/* Icon */}
                <div className="absolute -left-16 md:-left-20 top-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-space-cyan to-space-blue rounded-full flex items-center justify-center text-white cyan-glow">
                  <GraduationCap size={24} />
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-space-white mb-2">
                  Loyola ICAM College of Engineering and Technology
                </h3>
                <p className="text-lg text-space-cyan font-semibold mb-3">
                  B.Tech Information Technology
                </p>
                <p className="text-base text-space-secondary mb-4">
                  2nd Year • 3rd Semester
                </p>
                <p className="text-sm text-space-muted mb-6">
                  Expected Graduation: 2029
                </p>

                {/* Academic Stats */}
                <div className="grid grid-cols-3 gap-4 border-t border-space-cyan/20 pt-6">
                  {academics.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{item.value}</div>
                      <div className="text-xs text-space-secondary font-medium mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
