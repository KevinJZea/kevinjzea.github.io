import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#212121',
        'dark-black': '#0c0c0c',
        'light-blue': '#00447c',
        'dark-blue': '#002756',
        'light-aqua': '#0b7b9e',
        'dark-aqua': '#035b7a',
        'light-sand': '#dddace',
        'dark-sand': '#c6c3b6',
        'light-white': '#f2f3f4',
        'dark-white': '#eaeaea',
      },
      fontFamily: {
        sans: ['sans-serif'],
        serif: ['serif'],
      },
    },
  },
  plugins: [],
};
export default config;
