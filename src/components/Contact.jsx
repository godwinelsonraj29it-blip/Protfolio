import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'godwinraja08@gmail.com',
      href: 'mailto:godwinraja08@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8248511622',
      href: 'tel:8248511622',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Namakkal / Chennai, Tamil Nadu',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-space-dark to-space-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="hud-label mb-3">$ CHANNEL // OPEN</div>
          <h2 className="text-4xl md:text-5xl font-bold text-space-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-space-muted max-w-2xl mx-auto">
            I'm always interested in learning, building and connecting with people in technology.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-space-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className={`flex items-start gap-4 ${info.href ? 'group cursor-pointer' : ''}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-space-blue/10 border border-space-cyan/30 rounded-lg group-hover:bg-space-cyan/20 group-hover:border-space-cyan/60 transition-all">
                        <Icon className="text-space-cyan" size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-space-secondary font-medium mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-space-white font-semibold hover:text-space-cyan transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-space-white font-semibold">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="premium-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-space-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-space-cyan/30 bg-space-midnight/40 rounded-lg text-space-white placeholder-space-muted focus:outline-none focus:ring-2 focus:ring-space-cyan smooth-transition"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-space-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-space-cyan/30 bg-space-midnight/40 rounded-lg text-space-white placeholder-space-muted focus:outline-none focus:ring-2 focus:ring-space-cyan smooth-transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-space-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-space-cyan/30 bg-space-midnight/40 rounded-lg text-space-white placeholder-space-muted focus:outline-none focus:ring-2 focus:ring-space-cyan smooth-transition resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-space-cyan/10 border border-space-cyan/40 text-space-cyan rounded-lg text-sm font-medium"
                  >
                    ✓ Contact form UI ready. Connect an email service to enable submissions.
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 space-button-primary"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
