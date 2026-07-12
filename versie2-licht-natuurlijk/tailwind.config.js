/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bc-cream': '#faf8f5',
        'bc-cream-2': '#f5f0e8',
        'bc-forest': '#2d5016',
        'bc-forest-light': '#4a7c2a',
        'bc-earth': '#8b6f47',
        'bc-earth-light': '#a8895e',
        'bc-bark': '#5c4033',
        'bc-leaf': '#6b8e4e',
        'bc-sky': '#a8c8d8',
        'bc-text': '#3a2e1f',
        'bc-text-light': '#6b5d4f',
      },
      fontFamily: {
        'rounded': ['Nunito', 'sans-serif'],
        'sans': ['Nunito', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
