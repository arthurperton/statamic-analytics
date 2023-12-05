/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'analytics-blue': '#2D9CF9',
        'analytics-green': '#0AD7B0',
        'analytics-pink': '#FF269E',
        'analytics-yellow': '#FAF77D',
        'analytics-purple': '#7C67CB',
      },
    },
  },
  plugins: [],
}

