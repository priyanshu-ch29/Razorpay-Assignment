/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarColor: "#171f2b",
        background: "#0a111a",
      },
      backgroundSize: {
        "10p": "15% auto",
        "30p": "20% auto", // Custom size for 10%
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(90deg, rgba(231, 232, 236, 0.02) 30%, hsla(0, 0%, 100%, 0) 100%)",
      },
    },
  },
  plugins: [],
};
