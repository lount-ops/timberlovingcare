/** @type {import('tailwindcss').Config} */
export const content = [
  './layouts/**/*.html',
  './content/**/*.{html,md}',
  './themes/tailbliss/layouts/**/*.html',
];
export const theme = {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [];
