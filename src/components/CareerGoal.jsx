import { motion } from 'framer-motion'
import { Target, Code, Zap } from 'lucide-react'

export default function CareerGoal() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-space-navy to-space-midnight">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ OBJECTIVE // CAREER</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Where I'm Heading
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="relative bg-gradient-to-br from-space-midnight to-space-navy text-space-white p-8 md:p-12 rounded-2xl border border-space-cyan/30 cyan-glow">
            {/* Icon decorations */}
            <div className="absolute top-6 right-6 opacity-20">
              <Code size={48} className="text-space-cyan" />
            </div>
            <div className="absolute bottom-6 left-6 opacity-20">
              <Zap size={48} className="text-space-purple" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-6">
                <Target className="text-space-cyan flex-shrink-0 mt-1" size={24} />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Career Aspiration
                </h3>
              </div>

              <p className="text-lg leading-relaxed text-space-secondary">
                I aspire to grow as a technology professional by strengthening my programming skills, solving real-world problems and continuously learning new technologies. My long-term career aspiration is to work at IBM and contribute to meaningful technology solutions.
              </p>

              {/* Accent line */}
              <div className="mt-8 pt-8 border-t border-space-cyan/30 flex items-center gap-2">
                <div className="w-2 h-2 bg-space-cyan rounded-full"></div>
                <span className="text-sm text-space-muted">Building the future one line of code at a time</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
