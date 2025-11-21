export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    animation: {
      fadeIn: "fadeIn 1.2s ease-in-out",
      slideUp: "slideUp 0.7s ease-out",
      scaleIn: "scaleIn 0.8s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      slideUp: {
        "0%": { opacity: 0, transform: "scale(0.8)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    scaleIn: {
      "0%": { opacity: 0, transform: "scale(0.8)" },
      "100%": { opacity: 1, transform: "scale(1)" },
    },
  },
   } },
  plugins: [],
};