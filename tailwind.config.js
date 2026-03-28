/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#70585b",
        "primary-container": "#fadadd",
        secondary: "#884e55",
        "secondary-container": "#fdb3bb",
        tertiary: "#7d544c",
        "tertiary-container": "#ffd9d1",
        surface: "#fbf9f8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3f3",
        "surface-container-high": "#eae8e7",
        background: "#fbf9f8",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#4f4445",
        "on-primary-container": "#765e61",
        "outline-variant": "#d2c3c4"
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      boxShadow: {
        'blush-glow': '0px 12px 32px rgba(136, 78, 85, 0.06)',
      },
      borderRadius: {
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '2.5rem',
        'full': '9999px',
      }
    },
  },
  plugins: [],
}
