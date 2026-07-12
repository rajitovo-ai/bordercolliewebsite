/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bc-white': '#ffffff',
        'bc-offwhite': '#f8f8f8',
        'bc-blue': '#0066ff',
        'bc-blue-light': '#3d8bff',
        'bc-blue-dark': '#0047cc',
        'bc-coral': '#ff6b6b',
        'bc-coral-light': '#ff8e8e',
        'bc-dark': '#0a0a0a',
        'bc-gray': '#6b6b6b',
        'bc-gray-light': '#e0e0e0',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'sans': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
}
