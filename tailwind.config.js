/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: 'var(--primary-color)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
        // Background Colors
        'dark-bg': 'var(--dark-bg)',
        'darker-bg': 'var(--darker-bg)',
        'card-bg': 'var(--card-bg)',
        'card-hover-bg': 'var(--card-hover-bg)',
        'section-bg': 'var(--section-bg)',
        // Text Colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-accent': 'var(--text-accent)',
        // Music-themed Colors
        'beat-red': 'var(--beat-red)',
        'waveform-green': 'var(--waveform-green)',
        'frequency-yellow': 'var(--frequency-yellow)',
        'studio-silver': 'var(--studio-silver)',
        // Status Colors
        'success-green': 'var(--success-green)',
        'warning-yellow': 'var(--warning-yellow)',
        'error-red': 'var(--error-red)',
        'info-blue': 'var(--info-blue)',
        // Interactive Elements
        'border-color': 'var(--border-color)',
        'border-focus': 'var(--border-focus)',
        'hover-overlay': 'var(--hover-overlay)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-text': 'var(--gradient-text)',
      },
      boxShadow: {
        'primary': 'var(--shadow-primary)',
        'secondary': 'var(--shadow-secondary)',
        'accent': 'var(--shadow-accent)',
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-beat': 'var(--glow-beat)',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '25': '6.25rem',
      },
      zIndex: {
        '100': '100',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-up-delay-1': 'fadeInUp 0.8s ease-out 0.2s both',
        'fade-in-up-delay-2': 'fadeInUp 0.8s ease-out 0.4s both',
        'fade-in-up-delay-3': 'fadeInUp 0.8s ease-out 0.6s both',
        'gradient-shift': 'gradientShift 20s ease-in-out infinite',
        'float': 'float 20s infinite linear',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gradientShift: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
        },
        float: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(100px, 100px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} 