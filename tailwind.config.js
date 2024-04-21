/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#6C57C3', // Adding the custom color
        'dark-blue': '#161934',
        'dark-gray': '#292D30',
        'orange' : '#ECA32A',
        'violet' : '#554BDD',
        'violet-hover' : '#7068E0',
        'orange-hover': '#d2921e',
        'blue': '#2a3a5c'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
