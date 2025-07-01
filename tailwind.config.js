/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3B82F6', // Default Tailwind blue-500
        },
        gray: {
          100: '#f3f4f6', // Default Tailwind gray-100
          400: '#9ca3af', // Default Tailwind gray-400
          700: '#374151', // Default Tailwind gray-700
          800: '#1f2937', // Default Tailwind gray-800
          900: '#111827', // Default Tailwind gray-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}; 