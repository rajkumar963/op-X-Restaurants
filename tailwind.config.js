/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green":"#27ae60",
    "black":"#192a56",
    "light":"#666",
    "border":"#95a5a6",
    "secondary":"#555",
    "primaryBG":"#fcfcfc",
    },
      fontFamily: {
        "primary": ["Nunito Sans", "sans-serif"],
      },
    },
    },
    plugins: [
      require('daisyui'),
      
    ],
}

