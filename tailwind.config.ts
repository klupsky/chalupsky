import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        neue_montreal: ['NeueMontreal', 'sans-serif'],
      },
      colors: {
        black: '#0E1110',
        white: '#FFF',
      },
    },
  },
  plugins: [],
};
export default config;
