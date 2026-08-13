import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

export default function Certification() {
  return (
    <section id="certification" className="py-20 px-4 bg-gradient-to-b from-space-navy to-space-midnight">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ ACHIEVEMENT // VERIFIED</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Certification
          </h2>
        </motion.div>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="premium-card p-8 md:p-10 border-l-4 border-space-cyan">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-space-cyan/10 border border-space-cyan/40 rounded-lg cyan-glow">
                  <Award className="text-space-cyan" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-space-white">
                    Programming Using Java
                  </h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-space-cyan/10 border border-space-cyan/40 text-space-cyan rounded-full text-xs font-semibold">
                    <CheckCircle size={14} />
                    Verified
                  </span>
                </div>
                
                <p className="text-lg text-space-cyan font-semibold mb-2">
                  Infosys Springboard
                </p>
                
                <p className="text-base text-space-muted leading-relaxed">
                  Certification focused on strengthening Java programming fundamentals and object-oriented programming concepts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
