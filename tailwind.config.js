/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md}", // Adjust this path if your file structure is different
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          lg: '1200px',
          xl: '1400px',
        },
      },
      fontFamily: {
        heading: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--text)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: '#FAFAFA',
        },
        secondary: 'var(--secondary)',
        cta: {
          DEFAULT: 'var(--cta)',
          hover: 'var(--cta-hover)',
        },
        apple: {
          blue: '#007aff',
          'blue-dark': '#0056cc',
          gray: '#8e8e93',
          'gray-light': '#f2f2f7',
          'gray-dark': '#1c1c1e',
          text: '#1d1d1f',
          'text-secondary': '#86868b',
        },
        muted: '#3F3F46',
        'muted-foreground': '#71717a',
        card: {
          DEFAULT: '#ffffff',
          foreground: 'var(--text)',
        },
      },
      borderRadius: {
        'apple': '8px',
      },
      boxShadow: {
        'apple-small': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'apple-medium': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'apple-large': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}