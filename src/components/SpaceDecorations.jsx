import { motion } from 'framer-motion'
import { Rocket, Satellite, Zap } from 'lucide-react'

export function FloatingPlanet({ size = 'medium', position = 'top-10 right-10', delay = 0, duration = 8 }) {
  const sizeClasses = {
    small: 'planet-small',
    medium: 'planet-medium',
    large: 'planet-large',
  }

  return (
    <motion.div
      className={`planet ${sizeClasses[size]} absolute ${position} float-slow`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    />
  )
}

export function AsteroidField({ count = 5, region = 'top' }) {
  const asteroids = Array.from({ length: count }).map((_, i) => ({
    id: i,
    delay: i * 0.2,
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 20}%`,
    duration: 6 + Math.random() * 4,
  }))

  const positionClass = region === 'bottom' ? 'bottom-0' : 'top-0'

  return (
    <div className={`absolute ${positionClass} w-full h-24 pointer-events-none overflow-hidden`}>
      {asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="asteroid absolute"
          style={{ left: asteroid.left, top: asteroid.top }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: asteroid.duration,
            delay: asteroid.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function FloatingRocket({ position = 'top-20 left-10', delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${position}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Rocket className="rocket-icon text-space-cyan" size={28} strokeWidth={1.5} />
    </motion.div>
  )
}

export function FloatingSatellite({ position = 'top-32 right-20', delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${position}`}
      animate={{
        y: [0, 30, 0],
        x: [0, -15, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <Satellite className="satellite-icon text-space-cyan opacity-60" size={24} />
    </motion.div>
  )
}

export function SpaceStone({ position = 'absolute top-1/2 left-1/4', size = '32px', opacity = 0.4 }) {
  return (
    <motion.div
      className={`${position} relative`}
      animate={{
        rotate: [0, 360],
        y: [0, -15, 0],
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <div
        className="asteroid"
        style={{
          width: size,
          height: size,
          background: `rgba(203, 213, 225, ${opacity})`,
          borderRadius: '50%',
          filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))',
        }}
      />
    </motion.div>
  )
}

export function TechZap({ position = 'top-1/4 right-1/3', delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${position} opacity-40`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Zap className="text-space-purple" size={24} />
    </motion.div>
  )
}

export function StarBurst({ position = 'absolute top-1/3 left-1/2', delay = 0 }) {
  return (
    <motion.div
      className={`${position} star-burst`}
      animate={{
        scale: [0.5, 1, 0.5],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function OrbitingPlanets({ centerPosition = 'center', orbitalRadius = '80px' }) {
  return (
    <motion.div
      className={`absolute ${centerPosition} pointer-events-none`}
      style={{ width: orbitalRadius, height: orbitalRadius }}
    >
      {/* Orbital path */}
      <div
        className="absolute inset-0 border border-space-cyan/20 rounded-full"
        style={{ animation: 'none' }}
      />

      {/* Orbiting planets */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-space-purple rounded-full shadow-lg shadow-space-purple/50" />
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="w-3 h-3 bg-space-cyan rounded-full shadow-lg shadow-space-cyan/50" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function SpaceBackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating planets scattered */}
      <FloatingPlanet size="small" position="top-20 right-20" delay={0} />
      <FloatingPlanet size="medium" position="bottom-32 left-10" delay={0.5} />
      <FloatingPlanet size="small" position="top-1/2 right-1/4" delay={1} />

      {/* Asteroid fields */}
      <AsteroidField count={8} region="top" />
      <AsteroidField count={6} region="bottom" />

      {/* Floating objects */}
      <FloatingRocket position="top-1/3 left-5" delay={0} />
      <FloatingRocket position="bottom-1/3 right-10" delay={1} />
      <FloatingSatellite position="top-2/3 right-1/3" delay={0} />
      <FloatingSatellite position="bottom-1/4 left-1/3" delay={2} />

      {/* Space stones */}
      <SpaceStone position="absolute top-1/4 left-1/3" size="24px" opacity={0.3} />
      <SpaceStone position="absolute bottom-1/4 right-1/4" size="16px" opacity={0.2} />
      <SpaceStone position="absolute top-3/4 left-1/2" size="32px" opacity={0.25} />

      {/* Tech zaps */}
      <TechZap position="top-1/3 right-1/2" delay={0} />
      <TechZap position="bottom-1/2 left-1/4" delay={0.7} />
      <TechZap position="top-1/2 right-1/3" delay={1.4} />

      {/* Star bursts */}
      <StarBurst position="absolute top-20 left-1/2" delay={0} />
      <StarBurst position="absolute bottom-20 right-1/3" delay={0.5} />
      <StarBurst position="absolute top-2/3 left-1/4" delay={1} />
    </div>
  )
}

export default SpaceBackgroundEffects
