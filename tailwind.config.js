/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'title' : 'text-3xl font-semibold capitalize text-center my-8'
    },
  },
  plugins: [],
}

