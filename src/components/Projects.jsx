import { motion } from 'framer-motion'
import { Code, ArrowRight, Rocket, Satellite } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-space-navy to-space-midnight relative overflow-hidden">
      {/* Background space decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Satellites */}
        <motion.div
          className="absolute top-20 left-10 opacity-30"
          animate={{ y: [0, 30, 0], x: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Satellite className="text-space-cyan" size={32} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 opacity-25"
          animate={{ y: [0, -30, 0], x: [0, 25, 0], rotate: [360, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Satellite className="text-space-blue" size={28} />
        </motion.div>

        {/* Floating Rockets */}
        <motion.div
          className="absolute top-1/2 left-5 opacity-40"
          animate={{ y: [0, -40, 0], rotate: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Rocket className="text-space-cyan" size={36} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-5 opacity-35"
          animate={{ y: [0, 40, 0], x: [0, -15, 0], rotate: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Rocket className="text-space-purple" size={32} strokeWidth={1.5} />
        </motion.div>

        {/* Floating planets */}
        <motion.div
          className="absolute top-40 right-1/4 opacity-30"
          animate={{ rotate: [0, 360], y: [0, -15, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity } }}
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-space-blue/40 to-space-cyan/20 border border-space-blue/30 shadow-lg shadow-space-blue/20"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 opacity-25"
          animate={{ rotate: [360, 0], y: [0, 20, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, y: { duration: 5, repeat: Infinity } }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-purple/30 to-space-blue/10 border border-space-purple/20"></div>
        </motion.div>

        {/* Asteroids */}
        <motion.div
          className="absolute top-1/4 right-1/3 opacity-40"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity } }}
        >
          <div className="w-3 h-3 bg-space-cyan rounded-full shadow-md shadow-space-cyan/40"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 opacity-30"
          animate={{ x: [0, -30, 0], y: [0, 20, 0], rotate: [0, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <div className="w-2 h-2 bg-space-blue/60 rounded-full"></div>
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
          <div className="hud-label mb-3">$ LAUNCH // PAD</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Projects
          </h2>
        </motion.div>

        {/* Empty State Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="premium-card p-12 text-center border-2 border-dashed border-space-cyan/30 hover:border-space-cyan/60 transition-colors">
            {/* Icon with animated rocket */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-space-blue/10 border border-space-cyan/40 rounded-lg mb-6 cyan-glow relative">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Rocket className="text-space-cyan" size={32} strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Main Heading */}
            <h3 className="text-3xl font-bold text-space-white mb-3">
              Projects Coming Soon
            </h3>

            {/* Description */}
            <p className="text-lg text-space-secondary mb-8">
              I'm currently working on developing practical projects and will be adding them here soon.
            </p>

            {/* Terminal-style section */}
            <div className="bg-space-midnight/80 border border-space-cyan/20 text-space-cyan rounded-lg p-6 font-mono text-sm mb-8 text-left overflow-x-auto cyan-glow">
              <div className="text-space-muted/70 mb-3">$ godwin --projects</div>
              <div className="space-y-2">
                <div className="text-space-cyan/80">&gt; Learning</div>
                <div className="text-space-cyan/80">&gt; Building</div>
                <div className="text-space-cyan/80">&gt; Experimenting</div>
                <motion.div
                  className="text-space-muted text-xs"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &gt; Coming soon...
                </motion.div>
              </div>
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 space-button-primary">
              Stay Tuned
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
