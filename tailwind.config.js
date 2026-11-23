/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#168B36',
          deep: '#08752E',
          teal: '#159AA5',
          mint: '#E8F7F7',
          soft: '#EFF8F0',
          red: '#D83B43',
        },
        ink: '#172B25',
        muted: '#64746C',
        canvas: '#F8FAF9',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,43,37,0.04), 0 12px 32px -12px rgba(23,43,37,0.14)',
        lift: '0 2px 4px rgba(23,43,37,0.05), 0 24px 48px -20px rgba(8,117,46,0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  plugins: [],
}
