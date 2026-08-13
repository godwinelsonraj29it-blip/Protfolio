import { motion } from 'framer-motion'
import { Mail, Phone, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gradient-to-b from-space-midnight to-space-dark text-space-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-3 text-space-white">Godwin Elsonraj A</h3>
            <p className="text-space-secondary text-sm leading-relaxed">
              B.Tech Information Technology Student
            </p>
            <p className="text-space-muted text-xs mt-4">
              Passionate about programming, problem-solving, and continuous learning.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-space-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-space-secondary hover:text-space-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Quick Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-space-white">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:godwinraja08@gmail.com"
                className="flex items-center gap-2 text-space-secondary hover:text-space-cyan transition-colors text-sm"
              >
                <Mail size={16} />
                godwinraja08@gmail.com
              </a>
              <a
                href="tel:8248511622"
                className="flex items-center gap-2 text-space-secondary hover:text-space-cyan transition-colors text-sm"
              >
                <Phone size={16} />
                8248511622
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="space-divider"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-space-muted text-sm">
            © {currentYear} Godwin Elsonraj A. All rights reserved.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-space-muted text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-space-cyan animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
