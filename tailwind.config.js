/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        keyframes: {
          slide: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        animation: {
          slide: 'slide 1s ease-out forwards',
        },
      },
    },
    plugins: [],
  };
  


