import { Mail, Phone, Rocket, Satellite, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-space-dark via-space-navy to-space-midnight pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* HUD Badge */}
            <motion.div variants={itemVariants}>
              <span className="hud-label">$ SYSTEM ONLINE</span>
              <span className="inline-block px-4 py-2 bg-space-blue/10 border border-space-cyan/40 text-space-cyan font-medium text-sm rounded-lg mt-3">
                B.Tech IT Student • 2nd Year
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-space-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Godwin Elsonraj A.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-space-secondary font-medium">
                B.Tech Information Technology Student
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base text-space-muted leading-relaxed max-w-md">
                Passionate about programming, problem solving and learning new technologies. Currently building a strong foundation in software development and continuously exploring new ways to turn ideas into practical solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#skills"
                className="space-button-primary"
              >
                Explore My Skills
              </a>
              <a
                href="#contact"
                className="space-button-secondary"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Contact Links */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-4">
              <a
                href="mailto:godwinraja08@gmail.com"
                className="flex items-center gap-2 text-space-cyan hover:text-space-purple transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href="tel:8248511622"
                className="flex items-center gap-2 text-space-cyan hover:text-space-purple transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm font-medium">Phone</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center relative"
          >
            {/* Decorative Background Nebula */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-space-cyan/20 to-space-purple/20 rounded-full blur-3xl"></div>
            </div>

            {/* Floating Space Objects Around Profile */}
            {/* Top Left Rocket */}
            <motion.div
              className="absolute top-0 left-0 opacity-60"
              animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [-10, 0, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Rocket className="text-space-cyan" size={32} strokeWidth={1.5} />
            </motion.div>

            {/* Top Right Satellite */}
            <motion.div
              className="absolute top-10 right-0 opacity-50"
              animate={{ y: [0, 20, 0], x: [0, -15, 0], rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <Satellite className="text-space-cyan" size={28} />
            </motion.div>

            {/* Bottom Left Planet */}
            <motion.div
              className="absolute bottom-10 left-0 opacity-40"
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-purple/50 to-space-blue/30 border border-space-purple/40 shadow-lg shadow-space-purple/30"></div>
            </motion.div>

            {/* Bottom Right Zap Energy */}
            <motion.div
              className="absolute bottom-5 right-5 opacity-50"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              <Zap className="text-space-cyan" size={24} />
            </motion.div>

            {/* Asteroids around profile */}
            <motion.div
              className="absolute top-20 left-1/2 opacity-40"
              animate={{ rotate: [0, 360], y: [0, -10, 0] }}
              transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 3, repeat: Infinity } }}
            >
              <div className="w-3 h-3 bg-space-cyan/60 rounded-full shadow-md shadow-space-cyan/40"></div>
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 right-10 opacity-30"
              animate={{ rotate: [360, 0], x: [0, 15, 0] }}
              transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, x: { duration: 4, repeat: Infinity } }}
            >
              <div className="w-2 h-2 bg-space-cyan/50 rounded-full"></div>
            </motion.div>

            {/* Profile Image Container */}
            <div className="relative w-80 h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 z-10">
              {/* Outer Orbital Ring */}
              <div className="absolute -inset-6 rounded-full border border-space-cyan/30 orbital-ring"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-space-cyan/30 to-space-purple/30 rounded-full blur-lg"></div>

              {/* Main Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-space-cyan/50 cyan-glow">
                <img
                  src="/profile.jpg"
                  alt="Godwin Elsonraj A - Portfolio Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Info Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -left-6 glass px-4 py-3 w-40 rounded-lg border border-space-cyan/40"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">8.5</div>
                  <div className="text-xs text-space-secondary font-medium">Current CGPA</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-6 -right-8 glass px-4 py-3 w-40 rounded-lg border border-space-cyan/40"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2029</div>
                  <div className="text-xs text-space-secondary font-medium">Expected Graduation</div>
                </div>
              </motion.div>

              {/* Small Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-space-cyan to-space-blue text-white px-3 py-2 rounded-lg text-xs font-semibold border border-space-cyan/60"
              >
                3rd Semester
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
