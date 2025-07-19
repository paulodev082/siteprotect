/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // caso esteja usando /app (Next 13+)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",        // Azul principal
        secondary: "#1E40AF",      // Azul mais escuro (opcional)
        greenwhatsapp: "#25D366",  // Verde do WhatsApp
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Visual moderno e profissional
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
