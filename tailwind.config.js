/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#b829f7',
        'neon-green': '#39ff14',
        'dark-bg': '#0a0a0a',
        'electric-blue': '#00ffff',
      },
      fontFamily: {
        'heading': ['Orbitron', 'sans-serif'],
        'body': ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 5px #b829f7, 0 0 10px #b829f7',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #b829f7, 0 0 10px #b829f7' },
          '100%': { textShadow: '0 0 10px #b829f7, 0 0 20px #b829f7, 0 0 30px #b829f7' },
        }
      },
    },
  },
  plugins: [],
}
