/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lpsci-yellow': '#F1C400',
        'lpsci-red': '#C64747',
        'lpsci-green': '#318B68'
      },
    }
  },
  plugins: []
};
