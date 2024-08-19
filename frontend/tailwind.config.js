/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ["Questrial", "sans-serif"]
      },
      backgroundImage: {
        'login-texture': "url('/images/login.jpg')",
        'background-texture': "url('/images/background.jpg')"
      },
      keyframes: {
        loading: {
          "0%": {
            strokeDashoffset: 4500
          },
          "100%": { 
            strokeDashoffset: 0
          }
        }
      },
      animation: {
        loading: "loading 18s ease"
      }
    },
  },
  plugins: [],
}

