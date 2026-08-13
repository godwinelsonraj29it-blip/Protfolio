/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#020617',
        'space-navy': '#061426',
        'space-midnight': '#0B1B34',
        'space-blue': '#2563EB',
        'space-cyan': '#22D3EE',
        'space-purple': '#8B5CF6',
        'space-white': '#F8FAFC',
        'space-secondary': '#CBD5E1',
        'space-muted': '#94A3B8',
        'deep-navy': '#071A2B',
        'dark-slate': '#0F2740',
        'electric-blue': '#2563EB',
        'bright-blue': '#3B82F6',
        'soft-white': '#F8FAFC',
        'light-blue': '#E8F1FF',
        'muted-text': '#94A3B8',
        'dark-text': '#0F172A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scan': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
