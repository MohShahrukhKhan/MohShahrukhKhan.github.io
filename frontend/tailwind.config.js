/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
        },
        border: {
          DEFAULT: "var(--border-subtle)",
          accent: "var(--border-accent)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      maxWidth: {
        content: "1050px",
      },
    },
  },
  plugins: [],
};
