/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode:"class",
  theme: {
    extend: {
fontFamily:{
  poppins:["Poppins","sans-serif"],
},
colors:{
  primary:"#6153CD",
},
container:{
  center:true,
  padding:{
    Default:'1rem',
    sm:'3rem',
  }
}
    },
  },
  plugins: [],
}

