import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: []
} as Config;