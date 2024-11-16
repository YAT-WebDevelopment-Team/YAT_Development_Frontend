/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slide: "slide 20s linear infinite",
        slideUp: "slideUp 0.8s ease-out", // Add the new animation
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slideUp: { // Add the new keyframes
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
