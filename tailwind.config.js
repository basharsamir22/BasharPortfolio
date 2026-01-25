/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'bashar-gradient': 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
        },
      },
    },
    plugins: [],
  }