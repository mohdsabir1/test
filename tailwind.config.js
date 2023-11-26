/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // Add more files or directories for Tailwind to scan
  ],
  theme: {
    extend: {
       colors:{
        "textcolor":"#cd5ff8",
    },
    boxShadow:
    {
      "shadow": "14px 12px 23px -6px rgba(205,95,248,0.54)",
      
    }  
  },
  },
  plugins: [],
}

