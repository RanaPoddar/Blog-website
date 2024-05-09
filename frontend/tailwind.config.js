/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
primary :["Oswald", "sans-serif"]
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      colors : {
        primaryBlue : ["#00b0e6"],
        primaryGreen : ["#2d964b"]
      }
      
    },
  },
  plugins: [],
}

