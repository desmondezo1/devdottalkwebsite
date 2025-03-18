/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: '#4E9AFF',
          dark: '#3879d9',
          light: '#eaf2ff',
        },
        // Dark mode specific overrides happen via CSS variables
      },
      backgroundColor: {
        card: 'var(--card-background)',
      },
      textColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary-foreground)',
      },
      borderColor: {
        DEFAULT: 'var(--card-border)',
      },
      boxShadow: {
        card: '0 4px 6px var(--card-shadow)',
      },
    },
  },
  plugins: [],
} 