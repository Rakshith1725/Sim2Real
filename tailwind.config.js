/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050610",
          900: "#070814",
          800: "#0b0d1f",
          700: "#121533",
        },
        neon: {
          cyan: "#22d3ee",
          pink: "#fb7185",
          violet: "#a78bfa",
          lime: "#a3e635",
          amber: "#fbbf24",
        },
      },
      boxShadow: {
        glowCyan: "0 0 0 1px rgba(34,211,238,.25), 0 10px 40px rgba(34,211,238,.18)",
        glowPink: "0 0 0 1px rgba(251,113,133,.24), 0 10px 40px rgba(251,113,133,.16)",
        glowViolet: "0 0 0 1px rgba(167,139,250,.25), 0 10px 40px rgba(167,139,250,.18)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        scan: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(120%)" },
        },
        flicker: {
          "0%,100%": { opacity: ".9" },
          "10%": { opacity: ".55" },
          "20%": { opacity: ".95" },
          "30%": { opacity: ".75" },
          "40%": { opacity: ".95" },
          "50%": { opacity: ".65" },
          "60%": { opacity: ".95" },
          "70%": { opacity: ".8" },
          "80%": { opacity: ".95" },
          "90%": { opacity: ".7" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
        scan: "scan 5s linear infinite",
        flicker: "flicker 4s steps(60) infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
}