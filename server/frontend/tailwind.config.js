const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        grype: ["Grype", "sans-serif"],
      },
      colors: {
       // Light theme colors
       warmBeige: '#FAF3E0',       // Light theme background
       darkSlate: '#2F3E46',       // Light theme text
       sageGreen: '#7C9A82',       // Light theme accent
       rosewoodRed: '#B55A5A',     // Light theme highlight

       // Dark theme colors
       jetBlack: '#121212',        // Dark theme background
       paleGray: '#E5E5E5',        // Dark theme text
       burgundy: '#800020',        // Dark theme accent
       burntOrange: '#FF7043',     // Dark theme highlight
      },
    },
  },
  darkMode: 'class',
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};