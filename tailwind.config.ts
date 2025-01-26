import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        lPink: {
        50: '#fff2fc',
        100: '#ffe4fa',
        200: '#ffc7f3',
        300: '#ff9ce5',
        400: '#ff61d4',
        500: '#ff26cc',
        600: '#f405c6',
        700: '#dd00ae',
        800: '#a50380',
        900: '#860967',
        950: '#5c0045',
    },
    

      }
    }
  },
  plugins: [flowbitePlugin]
} as Config;